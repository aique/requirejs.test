define(["data/orderData","data/productData","model/order","model/orderProduct"],function(e,t,n,r){var i=function(){};return i.loadOrderData=function(){var t=e.getOrder(),n=t.getOrderProducts(),r=n.length,i=0,s=0;for(var o=0;o<r;o++)i=n[o].getProduct().getPrice()*n[o].getUnits(),n[o].setPrice(i),s+=i;return t.setPrice(s),t},i.updateProductUnits=function(e,i,s,o){var u=new n,a=t.getProduct(e),f=i;if(o)f=i+1,u.setPrice(parseFloat(s)+parseFloat(a.getPrice()));else{if(!(i>1))return!1;f=i-1,u.setPrice(parseFloat(s)-parseFloat(a.getPrice()))}var l=new r;return l.setProduct(a),l.setUnits(f),l.setPrice(a.getPrice()*f),u.setOrderProducts(new Array(l)),u},i.removeProduct=function(){var t=e.removeProduct();return t},i});