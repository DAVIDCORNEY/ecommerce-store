import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollectionPreview } from "../../redux/shop/shop.selectors";

import CollectionPreview from "../CollectionPreview/CollectionPreview.component";

import { CollectionsOverviewContainer } from "./CollectionOverview.styles";

const CollectionsOverview = ({ collections }) => (
  <CollectionsOverviewContainer>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </CollectionsOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
