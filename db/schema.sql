-- Drop database and tables if necessary
-- DROP DATABASE IF EXISTS travel_db;

DROP TABLE IF EXISTS countries CASCADE;
DROP TABLE IF EXISTS cities CASCADE;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS comments CASCADE;

CREATE TABLE countries (
id          SERIAL PRIMARY KEY NOT NULL,
name        VARCHAR(128)
);

CREATE TABLE cities (
id          SERIAL PRIMARY KEY NOT NULL,
country_id  INT REFERENCES countries(id),
city_name   VARCHAR(128),
img_url     VARCHAR(256)
);

CREATE TABLE users (
id          SERIAL PRIMARY KEY NOT NULL,
username    VARCHAR(128) NOT NULL UNIQUE,
password    VARCHAR(128) NOT NULL
);

CREATE TABLE comments (
id          SERIAL PRIMARY KEY NOT NULL,
comment     VARCHAR(256),
city_id     INT REFERENCES cities(id)
);

INSERT INTO countries
(name)
VALUES
('Italy'),
('UK'),
('South Africa'),
('US'),
('Japan'),
('Bahamas'),
('Brazil'),
('Greece'),
('Switzerland'),
('Bermuda');


INSERT INTO cities
(country_id, city_name, img_url)
VALUES
(1, 'Rome', 'https://cdn.getyourguide.com/img/location_img-33-3199196009-148.jpg'),
(2, 'London', 'https://cdn.londonandpartners.com/-/media/images/london/visit/london-organisations/tower-bridge-exhibition/tower-bridge-homepage-image.jpg?mw=1920&hash=E19E0136A57855A8ED61B4E66EA72F1646CA8DAC'),
(3, 'Cape Town', 'https://www.thesouthafrican.com/wp-content/uploads/2016/02/cape-town-1.jpg'),
(4, 'Honolulu', 'https://a1.r9cdn.net/rimg/dimg/73/93/010fa630-city-28070-15b0fe71be2.jpg?crop=true&width=1000&height=600&xhint=1948&yhint=1284'),
(5, 'Tokyo', 'https://www.jnto.go.jp/eng/wp-content/uploads/2016/06/Tokyo.jpg'),
(6, 'Nassau', 'https://www.flyingandtravel.com/wp-content/uploads/2017/05/paradise-island-atlantis-1024x683.jpg'),
(7, 'Rio De Janeiro', 'https://www.pandotrip.com/wp-content/uploads/2013/07/Untitled-62-980x613.jpg'),
(8, 'Santorini', 'https://www.discovergreece.com/~/media/images/a-story-a-day/images/may%202014/1920_shutterstock_132953783-fl.ashx?w=820&h=483&crop=1'),
(9, 'Bern', 'https://cdn.thecrazytourist.com/wp-content/uploads/2017/09/Aare.jpg'),
(10, 'Hamilton', 'https://c1.staticflickr.com/4/3475/3953855319_02a4ca50e8_b.jpg');

INSERT INTO users
(username, password)
VALUES
('Mr. Man', 'Lala65'),
('Ms. Woman', 'yaha87');

INSERT INTO comments
(comment, city_id)
VALUES
('Very cool', 2),
('Not very cool', 4),
('Eh so-so', 5),
('This looks awful', 6),
('I want to live here', 8),
('I want to live here', 1),
('I want to live here', 9),
('I want to live here', 10),
('I want to live here', 3),
('I want to live here', 7);
