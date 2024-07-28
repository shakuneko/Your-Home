import ShopProductItem from "./ShopProductItem";
import products from "../json/products.json";
import {Row,Col,Layout}from "antd";
import ShopNavBar from "../components/ShopNavBar";
// import { Scrollbars } from 'react-custom-scrollbars';

const { Sider } = Layout;
export default function Shopproduct(){
    return(
        <div  className="product">
            <div className="big-container">       
                <h4 >Shop</h4>
                <div className="menu-all">
                  <div className="menu-left">
                      <ShopNavBar />
                  </div>
                <section className="shop-ant-layout">
                <Row gutter={[32,32]}>
                  {products.map(product => (
                    <Col 
                      key={product.id}
                      lg={{ span: 12 }}
                      xl={{ span: 8 }}
                      xxl={{ span: 6 }}
                    >
                      <ShopProductItem  product={product}/>
                    </Col>
                  ))}
                </Row>
                </section>
                </div>
              </div>
    </div>
    
    
    );
}
