import { LoginPage } from "../page-objects/login_page";
import { BrowseProduct } from "../page-objects/browseproduct_page";
import { ProductDetails } from "../page-objects/productdetails_page";


const loginpage = new LoginPage;

beforeEach(() => {
    loginpage.login('testuser@teebay.com', '123456');
  });

const browseproducts = new BrowseProduct;
const productdetails = new ProductDetails;

describe('Succesfully buying a product' , () =>{

    it('Buys a product' , () =>{

        browseproducts.selecttab();
        browseproducts.selectaproduct("Blender");
        productdetails.buyproduct();

    });

});


describe('Succesfully renting a product' , () =>{

    it('Rents a product' , () =>{

        browseproducts.selecttab();
        browseproducts.selectaproduct("Blender");
        productdetails.rentproduct("2024-09-15","2025-01-25");
        

    });

});
     