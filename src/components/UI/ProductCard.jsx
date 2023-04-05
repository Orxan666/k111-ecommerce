import React from "react";
import { Col } from "reactstrap";
import '../../styles/productCard.scss'
import {motion} from "framer-motion"

const ProductCard = ({ item }) => {
  return (
    <Col lg="3" md="4" className="mb-2">
      <div className="product__item">
        <div className="product__img">
            <motion.img whileHover={{scale:0.9}}  className="img-fluid" src={item.imgUrl} alt="" />
        </div>
        <div className="product__info p-2 text-center">
            <h2>{item.productName}</h2>
            <span>{item.category}</span>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
