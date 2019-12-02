require_relative 'questions_database.rb'

class User
    attr_accessor :id, :fname, :lname

    def self.find_by_id(id)
        user = QuestionsDatabase.instance.execute(<<-SQL, id: id)
        SELECT
            users.*
        FROM
            users
        WHERE
            users.id = :id
        SQL
        if user.empty? 
            return nil 
        else
            User.new(user.first)
        end
    end

    def self.find_by_name(fname, lname)
        users = QuestionsDatabase.instance.execute(<<-SQL, fname, lname)
          SELECT
            users.*
          FROM
            users
          WHERE
            users.fname = ? AND users.lname = ?
        SQL
        users.map { | user | User.new(user) }
    end

    def initialize(options)
        @id = options['id']
        @fname = options['fname']
        @lname = options['lname']

    end

    def authored_questions
        Question.find_by_author_id(@id)
    end

    def authored_replies
        Reply.find_by_user_id(@id)
    end

    def followed_questions
        QuestionFollow.followed_questions_for_user_id(@id)
    end
    
    def liked_questions
        QuestionLike.liked_questions_for_user_id(@id)
    end

    def average_karma
        likes = QuestionsDatabase.instance.execute(<<-SQL, @id)
          SELECT
            COUNT(DISTINCT(questions.title)) as total_questions,
            CAST(COUNT(question_likes.id) AS FLOAT) as total_likes
          FROM
            questions
          LEFT OUTER JOIN
            question_likes ON question_likes.question_id = questions.id
          WHERE
            questions.user_id = ?
        SQL
        return nil if likes.first["total_questions"] == 0
        likes.first["total_likes"] / likes.first["total_questions"]
    end

    def save
      if @id 
        QuestionsDatabase.instance.execute(<<-SQL, @fname, @lname, @id)
          UPDATE 
            users
          SET
            fname = ?, lname = ?
          WHERE
            id = ?
        SQL
      else
        QuestionsDatabase.instance.execute(<<-SQL, @fname, @lname)
          INSERT INTO
            users (fname, lname)
          VALUES
            (?, ?)
        SQL
        self.id = QuestionsDatabase.instance.last_insert_row_id
      end
    end
end