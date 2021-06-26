import React from "react";

const Home = () => {
  return (
    <div>
      <div>
        <h2 className="blink-home-text">
          The meal sharing family invites you !!
        </h2>
      </div>
      <div className="main-image">
        <img
          src="https://roundpeg.biz/wp-content/uploads/2015/11/FoodandSpices-Cover.jpg"
          alt="Meals-picture"
        ></img>
      </div>
      <div>
        <div className="first-para-pic">
          <p className="home-first-para">
            Hosts arrange food at home for their guests . The guest can be a
            traveller or anybody who want to enjoy the local homecooked food.
            Invitees can come up with a group of friends to join the meal or can
            also arrive solo and meet some new people out here. Guests can pay
            some money or they can also bring some gifts.
          </p>
          <img
            className="cooking-image-home-first"
            src="https://alive.mblycdn.com/al/resized/2016/04/730x487/lunch-spread_359270072.jpg"
            alt="Cooking picture"
          />
        </div>
        <div className="second-para-pic">
          <p className="home-second-para">
            The invitees can have some customized food experience and they also
            get to know more aabout the local food. The one to one meetings make
            the travelers know about the local culture when they visit. For
            people who are new to the place get to know more about the city and
            culture.
          </p>
          <img
            className="cooking-image-home-second"
            src="https://d3i6fh83elv35t.cloudfront.net/newshour/app/uploads/2016/02/Mexico-cooking-1024x666.jpg"
            alt="Cooking picture"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
