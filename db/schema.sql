-- Drop database and tables if necessary
-- DROP DATABASE IF EXISTS travel_db;

DROP TABLE IF EXISTS countries CASCADE;
DROP TABLE IF EXISTS cities CASCADE;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS comments CASCADE;

CREATE TABLE countries (
id          SERIAL PRIMARY KEY NOT NULL,
name        VARCHAR(128),
img_url     VARCHAR(256)
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
(name, img_url)
VALUES
('Italy', 'https://handluggageonly.co.uk/wp-content/uploads/2016/03/Positano-Weather.jpg'),
('United Kingdom', 'https://www.nationalgeographic.com/content/dam/travel/Guide-Pages/europe/united-kingdoms/united-kingdom-travel.jpg'),
('South Africa', 'https://media.istockphoto.com/photos/twelve-apostles-mountain-in-camps-bay-cape-town-south-africa-picture-id477451698?k=6&m=477451698&s=612x612&w=0&h=CvgTUzHTEhX89Bu7L_ZFnxB3AqWnHlpJ63xquSc6DAs='),
('United States', 'https://s3.amazonaws.com/media01.bigblackbag.net/28379/portfolio_media/lwlm_hb-1645-final-1_3283.jpg'),
('Japan', 'https://cdn.cnn.com/cnn/.e/img/3.0/branding/backgrounds/on-the-road-japan/ontheroadjapan-background-full.jpg'),
('The Bahamas', 'https://boatimages0.boatbookings.com/imgcache/Bahamas_beach_2443_4879_90109c.jpg'),
('Brazil', 'http://www.nationalgeographicexpeditions.com/assets/images/1935/itinerary-header.jpg'),
('Greece', 'https://www.telegraph.co.uk/content/dam/Travel/2017/May/athens-greece.jpg?imwidth=450'),
('Switzerland', 'http://www.lonelyplanet.com/travel-blog/tip-article/wordpress_uploads/2017/08/shutterstock_404084068-24a799ab7bbd.jpg'),
('Bermuda','https://hips.hearstapps.com/hbz.h-cdn.co/assets/16/29/2560x1280/landscape-1468853047-hbz-jbf-bermuda-00-index1.jpg?resize=768:*'),
('Australia', 'https://travel.virginaustralia.com/sites/default/files/styles/thumbnail_large/public/field/image/930x431_great_barrier_reef.jpg?timestamp=1407220181'),
('Thailand', 'http://antourist.com.vn/images/tours/2017/12/29/original/1d_1514539618.jpg');

INSERT INTO cities
(country_id, city_name, img_url)
VALUES
(1, 'Rome', 'https://cdn.getyourguide.com/img/location_img-33-3199196009-148.jpg'),
(1, 'Naples', ''),
(1, 'Palermo', ''),
(1, 'Messina', ''),
(1, 'Venice', ''),
(2, 'London', 'https://cdn.londonandpartners.com/-/media/images/london/visit/london-organisations/tower-bridge-exhibition/tower-bridge-homepage-image.jpg?mw=1920&hash=E19E0136A57855A8ED61B4E66EA72F1646CA8DAC'),
(2, 'Glasgow', ''),
(2, 'Dublin', ''),
(3, 'Cape Town', 'https://www.thesouthafrican.com/wp-content/uploads/2016/02/cape-town-1.jpg'),
(3, 'Johannesburg', ''),
(4, 'Honolulu', 'https://a1.r9cdn.net/rimg/dimg/73/93/010fa630-city-28070-15b0fe71be2.jpg?crop=true&width=1000&height=600&xhint=1948&yhint=1284'),
(4, 'Detroit', ''),
(4, 'San Francsico', ''),
(4, 'Dallas', ''),
(4, 'New Orleans', ''),
(5, 'Tokyo', 'https://www.jnto.go.jp/eng/wp-content/uploads/2016/06/Tokyo.jpg'),
(5, 'Kyoto', ''),
(6, 'Nassau', 'https://www.flyingandtravel.com/wp-content/uploads/2017/05/paradise-island-atlantis-1024x683.jpg'),
(7, 'Rio De Janeiro', 'https://www.pandotrip.com/wp-content/uploads/2013/07/Untitled-62-980x613.jpg'),
(7, 'Fortaleza', ''),
(8, 'Santorini', 'https://www.discovergreece.com/~/media/images/a-story-a-day/images/may%202014/1920_shutterstock_132953783-fl.ashx?w=820&h=483&crop=1'),
(8, 'Athens', ''),
(8, 'Mykanos', ''),
(9, 'Bern', 'https://cdn.thecrazytourist.com/wp-content/uploads/2017/09/Aare.jpg'),
(9, 'Geneva', ''),
(10, 'Hamilton', 'https://c1.staticflickr.com/4/3475/3953855319_02a4ca50e8_b.jpg'),
(11, 'Sydney', ''),
(11, 'Melbourne', ''),
(11, 'Brisbane', ''),
(12, 'Bangkok', ''),
(12, 'Chaing Mai', ''),
(12, 'Krabi', '');

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