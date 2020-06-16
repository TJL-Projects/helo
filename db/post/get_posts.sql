select * from posts
join users on user_id = author_id
where author_id = $1