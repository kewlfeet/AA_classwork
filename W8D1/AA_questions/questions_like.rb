require_relative 'questions_database.rb'
require_relative 'user'

class QuestionLike
    attr_accessor :id, :user_id, :question_id

    def self.find_by_id(id)
        like = QuestionsDatabase.instance.execute(<<-SQL, id: id)
        SELECT
            question_likes.*
        FROM
            question_likes
        WHERE
            question_likes.id = :id
        SQL
        if like.empty? 
            return nil 
        else
            QuestionLike.new(like.first)
        end
    end

    def self.likers_for_question_id(question_id)
        users = QuestionsDatabase.instance.execute(<<-SQL, question_id)
        SELECT
            users.*
        FROM
            users
        INNER JOIN
            question_likes ON users.id = question_likes.user_id
        GROUP BY question_likes.question_id
        HAVING 
            question_likes.question_id = ?
        SQL
        users.empty? ? nil : users.map {|user| User.new(user)}
    end

    def self.num_likes_for_question_id(question_id)
        likes = QuestionsDatabase.instance.execute(<<-SQL, question_id)
          SELECT
            COUNT(question_likes.user_id) AS num_likes
          FROM
            question_likes
          WHERE
            question_likes.question_id = ?
        SQL
        likes.first['num_likes']
    end

    def self.liked_questions_for_user_id(user_id)
        questions = QuestionsDatabase.instance.execute(<<-SQL, user_id)
          SELECT
            questions.*
          FROM
            questions
          INNER JOIN
            question_likes ON question_likes.question_id = questions.id
          WHERE
            question_likes.user_id = ?
        SQL
        questions.empty? ? nil : questions.map {|question| Question.new(question)}
    end

    def self.most_liked_questions(n)
        questions = QuestionsDatabase.instance.execute(<<-SQL, n)
          SELECT
            questions.*
          FROM
            questions
          INNER JOIN
            question_likes ON question_likes.question_id = questions.id
          GROUP BY questions.id
          ORDER BY COUNT(question_likes.user_id)
          LIMIT ?
        SQL
        questions.empty? ? nil : questions.map {|question| Question.new(question)}
    end

    def initialize(options)
        @id = options['id']
        @user_id = options['user_id']
        @question_id = options['question_id']
    end

end
