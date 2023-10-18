create table comment (
    userid varchar(10) NOT NULL,
    comment_text text NOT NULL,
    hit int default 0 
);

INSERT INTO comment(userid, comment_text) VALUES('chadmom44', '안녕하세요.');