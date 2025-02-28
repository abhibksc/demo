import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Profile from './Profile';
import Addresses from './Addresses';
import Orders from './Orders';
import PANCardInfo from './PANCardInfo';
import GiftCard from './GiftCard';
import SavedUPI from './SavedUpi';
import SavedCards from './SavedCards';
import MyCoupans from './MyCoupans';
import MyReviewsRating from './MyReviewsRating';
import AllNotifications from './AllNotifications';
import MyWhishlist from './MyWhishlist';
import StoreOffer from './StoreOffer';
import MobileCategoryHeader from '../Header&SideBar/MobileCategoryHeader';

const UserProfile = () => {
  return (
    <div className="flex">
      <div className="w-full p-4">
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="addresses" element={<Addresses />} />
          <Route path="orders" element={<Orders />} />
          <Route path="pancard" element={<PANCardInfo />} />
          <Route path="giftcards" element={<GiftCard  />} /> 
          <Route path="savedupi" element={<SavedUPI  />} /> 
          <Route path="savedcard" element={<SavedCards  />} /> 
          <Route path="mycoupon" element={<MyCoupans  />} /> 
          <Route path="myreviews&ratings" element={<MyReviewsRating  />} /> 
          <Route path="allnotifications" element={<AllNotifications  />} /> 
          <Route path="mywishlist" element={<MyWhishlist  />} /> 
          <Route path="StoreOffer" element={<StoreOffer/>} /> 
          <Route path="mobileCategoryHeader" element={<MobileCategoryHeader/>} /> 
        </Routes>
      </div>
    </div>
  );
};

export default UserProfile;
