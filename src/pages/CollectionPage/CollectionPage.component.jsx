import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/CollectionItem/CollectionItem.component";

import { selectCollection } from "../../redux/shop/shop.selectors";

import "./CollectionPage.styles.scss";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={items.id} item={item} />
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state) //necessary to pass state as the selector needs part of the state depending on the Url parameter
});

export default connect(mapStateToProps)(CollectionPage);
