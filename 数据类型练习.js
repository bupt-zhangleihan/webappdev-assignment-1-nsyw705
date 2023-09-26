//购物车存储的商品信息包括：商品ID、商品名、商品型号、价格、数量、折扣等,数据类型包括string、number、bigint、boolean、undefined 和 symbol
let product_Name = "商品名称";//string,记录商品的名称
let product_Model = "商品型号";//string，记录商品的具体型号
let product_price = 100.00;//number，记录商品的售卖价格
let product_quantity = 2;//number，记录商品的数量
let product_discount = 10;//number，记录商品的折扣
let bigValue = 202121211800000000.0;//bigint，记录商品的售卖总额如季度销售净额
let product_isInStock = true;//undefined，记录商品是否入库
let product_isOnSale = false;//undefined，记录商品是否正在售卖
let optionalProperty; // 未定义的属性undefined，，商品的一些未定义属性
let privateSymbol = Symbol("私有属性");//
let cart = {
  [privateSymbol]: "这是私有属性的值"
};//symbol，用于记录一些非公开信息的变量

