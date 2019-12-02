require_relative 'questions_database.rb'
require_relative 'questions_like'
require_relative 'question_follow'
require_relative 'user'
require_relative 'reply'

class Question
    attr_accessor :id, :title, :body, :user_id

    def self.all
        all_questions = QuestionsDatabase.instance.execute("SELECT * FROM questions")
        all_questions.map {|question| Question.new(question)}
    end

    def self.find_by_id(id)
        question = QuestionsDatabase.instance.execute(<<-SQL, id: id)
        SELECT
            questions.*
        FROM
            questions
        WHERE
            questions.id = :id
        SQL
        if question.empty? 
            return nil 
        else
            Question.new(question.first)
        end
    end

    def self.find_by_author_id(author_id)
        questions = QuestionsDatabase.instance.execute(<<-SQL, author_id)
          SELECT
            questions.*
          FROM
            questions
          WHERE
            questions.user_id = ?
        SQL
        questions.map { | question | Question.new(question) }
    end

    def self.most_followed(n)
        QuestionFollow.most_followed_questions(n)
    end

    def self.most_liked(n)
        QuestionLike.most_liked_questions(n)
    end

    def initialize(options)
        @id = options['id']
        @title = options['title']
        @body = options['body']
        @user_id = options['user_id']

    end

    def author  
        User.find_by_id(user_id)
    end

    def replies
        Reply.find_by_question_id(@id)
    end

    def followers
        QuestionFollow.followers_for_question_id(@id)
    end

    def likers
        QuestionLike.likers_for_question_id(@id)
    end

    def num_likes
        QuestionLike.num_likes_for_question_id(@id)
    end

    def save
      if @id 
        QuestionsDatabase.instance.execute(<<-SQL, @title, @body, @user_id, @id)
          UPDATE 
            questions
          SET
            title = ?, body = ?, user_id = ?
          WHERE
            id = ?
        SQL
      else
        QuestionsDatabase.instance.execute(<<-SQL, @title, @body, @user_id)
          INSERT INTO
            questions ( title, body, user_id)
          VALUES
            (?, ?, ?)
        SQL
        self.id = QuestionsDatabase.instance.last_insert_row_id
      end
    end
end