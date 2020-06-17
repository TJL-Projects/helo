select p.title, p.img, p.content, u.username, u.profile_pic, p.author_id 
from posts p
join users  u on u.user_id = p.author_id
where p.post_id = $1