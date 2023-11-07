import React from "react";

const footerContent = [
  {
    _id: 1,
    category: "Shop and Learn",
    categoryItems: [
      { _id: 1, item: "Store" },
      { _id: 2, item: "Mac" },
      { _id: 3, item: "iPad" },
      { _id: 4, item: "iPhone" },
      { _id: 5, item: "Watch" },
      { _id: 6, item: "Vision" },
      { _id: 7, item: "Airpods" },
      { _id: 8, item: "TV & Home" },
      { _id: 9, item: "Airtag" },
      { _id: 10, item: "Accessories" },
      { _id: 11, item: "Gift Cards" },
    ],
  },
  {
    _id: 2,
    category: "Apple Wallet",
    categoryItems: [
      { _id: 1, item: "Wallet" },
      { _id: 2, item: "Apple Card" },
      { _id: 3, item: "Apple Pay" },
      { _id: 4, item: "Apple Cash" },
      { _id: 5, item: "Watch" },
    ],
  },
  {
    _id: 3,
    category: "Account",
    categoryItems: [
      { _id: 1, item: "Manage Your Apple ID" },
      { _id: 2, item: "Apple Store Account" },
      { _id: 3, item: "icloud.com" },
    ],
  },
  {
    _id: 4,
    category: "Entertainment",
    categoryItems: [
      { _id: 1, item: "Apple One" },
      { _id: 2, item: "Apple Tv+" },
      { _id: 3, item: "Apple Music" },
      { _id: 4, item: "Apple Arcade" },
      { _id: 5, item: "Apple Fitness+" },
      { _id: 6, item: "Apple News+" },
      { _id: 7, item: "Apple Podcasts" },
      { _id: 8, item: "Apple Books" },
      { _id: 9, item: "App Store" },
      { _id: 10, item: "Accessories" },
      { _id: 11, item: "Gift Cards" },
    ],
  },
  {
    _id: 5,
    category: "Apple Store",
    categoryItems: [
      { _id: 1, item: "Find a Store" },
      { _id: 2, item: "Genius Bar" },
      { _id: 3, item: "Today at Apple" },
      { _id: 4, item: "Apple Camp" },
      { _id: 5, item: "Apple Store App" },
      { _id: 6, item: "Certified Refurbished" },
      { _id: 7, item: "Apple Trade In" },
      { _id: 8, item: "Financing" },
      { _id: 9, item: "Carrier Deals at Apple" },
      { _id: 10, item: "Order Status" },
      { _id: 11, item: "Shopping Help" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-common ">
      <div className="w-[52%] mx-auto">
        <div className="text-xs leading-[1.33337] font-normal text-[#6e6e73] py-5">
          <li>
            {" "}
            1. Trade-in values will vary based on the condition, year, and
            configuration of your eligible trade-in device. Not all devices are
            eligible for credit. You must be at least 18 years old to be
            eligible to trade in for credit or for an Apple Gift Card. Trade-in
            value may be applied toward qualifying new device purchase, or added
            to an Apple Gift Card. Actual value awarded is based on receipt of a
            qualifying device matching the description provided when estimate
            was made. Sales tax may be assessed on full value of a new device
            purchase. In-store trade-in requires presentation of a valid photo
            ID (local law may require saving this information). Offer may not be
            available in all stores, and may vary between in-store and online
            trade-in. Some stores may have additional requirements. Apple or its
            trade-in partners reserve the right to refuse or limit quantity of
            any trade-in transaction for any reason. More details are available
            from Apple’s trade-in partner for trade-in and recycling of eligible
            devices. Restrictions and limitations may apply.{" "}
          </li>
          <li>
            To access and use all Apple Card features and products available
            only to Apple Card users, you must add Apple Card to Wallet on an
            iPhone or iPad that supports and has the latest version of iOS or
            iPadOS. Apple Card is subject to credit approval, available only for
            qualifying applicants in the United States, and issued by Goldman
            Sachs Bank USA, Salt Lake City Branch.
          </li>
          <li>
            {" "}
            If you reside in the U.S. territories, please call Goldman Sachs at
            877-255-5923 with questions about Apple Card.
          </li>
          <li>
            Learn more about how Apple Card applications are evaluated at
            <span>support.apple.com/kb/HT209218.</span>
          </li>
          <li>A subscription is required for Apple TV+.</li>
        </div>
        <div className="h-[1px] bg-[#d2d2d7] my-8"></div>
        <div>
          {footerContent.map((content) => {
            return (
              <div key={content._id}>
                <h1>{content.category}</h1>
                <ul>
                  {content.categoryItems.map((item) => {
                    return (
                      <li key={item._id}>
                        <span className="text-[#6e6e73] cursor-pointer underline-appear">
                          {item.item}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
