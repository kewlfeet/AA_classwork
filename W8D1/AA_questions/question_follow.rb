require_relative 'questions_database.rb'
require_relative 'question'


class QuestionFollow
    attr_accessor :id, :user_id, :question_id

    def self.find_by_id(id)
        follow = QuestionsDatabase.instance.execute(<<-SQL, id: id)
        SELECT
            question_follows.*
        FROM
            question_follows
        WHERE
            question_follows.id = :id
        SQL
        if follow.empty? 
            return nil 
        else
            QuestionFollow.new(follow.first)
        end
    end

    def self.followers_for_question_id(question_id)
        followers = QuestionsDatabase.instance.execute(<<-SQL, question_id)
            SELECT
                users.*
            FROM
                users
            INNER JOIN 
                question_follows ON users.id = question_follows.user_id
            WHERE
                question_follows.question_id = ?
        SQL
        followers.empty? ? nil : followers.map {|follower| User.new(follower)}
    end
    
    def self.followed_questions_for_user_id(user_id)
        questions = QuestionsDatabase.instance.execute(<<-SQL, user_id)
        SELECT
            questions.*
        FROM
            questions
        INNER JOIN
            question_follows ON questions.id = question_follows.question_id
        WHERE
            question_follows.user_id = ?      
        SQL
        questions.empty? ? nil : questions.map {|question| Question.new(question)}

        # questions2 = QuestionsDatabase.instance.execute(<<-SQL, user_id)
        # SELECT
        #     question_follows.*
        # FROM
        #     question_follows
        # WHERE
        #     question_follows.user_id = ?      
        # SQL
        # questions2.map {|q_id| Question.find_by_id(q_id["question_id"])}
    end

    def self.most_followed_questions(n)
        questions = QuestionsDatabase.instance.execute(<<-SQL, n)
          SELECT
            questions.*
          FROM
            questions
          INNER JOIN
            question_follows ON questions.id = question_follows.question_id
          GROUP BY question_follows.user_id
          ORDER BY COUNT(question_follows.user_id)
          LIMIT ?
        SQL
        questions.map { | question | Question.new(question) }
    end

    def initialize(options)
        @id = options['id']
        @user_id = options['user_id']
        @question_id = options['question_id']
    end


end
