# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
first_name      | string    | not null  
last_name       | string    | not null  
picture_url     | string    |   
password_digest | string    | not null
session_token   | string    | not null, indexed, unique


## channels
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null
purpose         | text      |


## channel_memberships
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key, indexed
channel_id      | integer   | not null, foreign key, indexed


## direct_message
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key


## direct_message_memberships
column name       | data type | details
------------------|-----------|-----------------------
id                | integer   | not null, primary key
user_id           | integer   | not null, foreign key, indexed
direct_message_id | integer   | not null, foreign key, indexed


## messages
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
body            | text      | not null
conversation_id | integer   | not null, foreign key, indexed
author_id       | integer   | not null, foreign key, indexed
