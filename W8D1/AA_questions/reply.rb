require_relative 'questions_database.rb'

class Reply
    attr_accessor :id, :user_id, :question_id, :parent_id, :body

    def self.find_by_id(id)
        reply = QuestionsDatabase.instance.execute(<<-SQL, id: id)
        SELECT
            replies.*
        FROM
            replies
        WHERE
            replies.id = :id
        SQL
        if reply.empty? 
            return nil 
        else
            Reply.new(reply.first)
        end
    end

    def self.find_by_user_id(user_id)
        replies = QuestionsDatabase.instance.execute(<<-SQL, user_id)
          SELECT
            replies.*
          FROM
            replies
          WHERE
            replies.user_id = ?
        SQL
        replies.map { | reply | Reply.new(reply) }
    end

    def self.find_by_question_id(question_id)
        replies = QuestionsDatabase.instance.execute(<<-SQL, question_id)
          SELECT
            replies.*
          FROM
            replies
          WHERE
            replies.question_id = ?
        SQL
        replies.map { | reply | Reply.new(reply) }
    end

    def initialize(options)
        @id = options['id']
        @user_id = options['user_id']
        @question_id = options['question_id']
        @parent_id = options['parent_id']
        @body = options['body']

    end

    def author
        User.find_by_id(@user_id)
    end

    def question
        Question.find_by_id(@question_id)
    end

    def parent_reply
        Reply.find_by_id(@parent_id)
    end

    def child_replies
        child = QuestionsDatabase.instance.execute(<<-SQL, @id)
        SELECT
            replies.*
        FROM
            replies
        WHERE
            replies.parent_id = ?
        SQL
        if child.empty?
            return nil
        else
            child.map{|reply| Reply.new(reply)}
        end
    end

    def save
      if @id 
        QuestionsDatabase.instance.execute(<<-SQL, @user_id, @question_id, @parent_id, @body, @id)
          UPDATE 
            replies
          SET
            user_id = ?, question_id = ?, parent_id = ?, body = ?
          WHERE
            id = ?
        SQL
      else
        QuestionsDatabase.instance.execute(<<-SQL, @user_id, @question_id, @parent_id, @body)
          INSERT INTO
            replies (user_id, question_id, parent_id, body)
          VALUES
            (?, ?, ?, ?)
        SQL
        self.id = QuestionsDatabase.instance.last_insert_row_id
      end
    end
end
