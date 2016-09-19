CREATE DATABASE BamazonDB;

USE BamazonDB;

CREATE TABLE Products(
  ItemID INTEGER NOT NULL AUTO_INCREMENT,
  ProductName VARCHAR(200) NOT NULL,
  DepartmentName VARCHAR(200) NOT NULL,
  Price DECIMAL(10,4) NULL,
  StockQuantity INTEGER(1000) NULL,
  PRIMARY KEY (id)
);

INSERT INTO Products (ProductName,DepartmentName,Price,StockQuantity);
VALUES ("Fender Limited Edition American Standard", "Guitar", 1499.99, 31);

INSERT INTO Products (ProductName,DepartmentName,Price,StockQuantity);
VALUES ("Fender American Elite Stratocaster HSS", "Guitar", 1799.99, 5);

INSERT INTO Products (ProductName,DepartmentName,Price,StockQuantity);
VALUES ("Gibson 2017 SG Standard T Electric Guitar", "Guitar", 1299.99, 8);

INSERT INTO Products (ProductName,DepartmentName,Price,StockQuantity);
VALUES ("Gretsch Guitars G6128T Duo Jet", "Guitar", 2199.99, 1);

INSERT INTO Products (ProductName,DepartmentName,Price,StockQuantity);
VALUES ("Taylor 400 Series 412e Rosewood Limited Edition Grand Concert Acoustic-Electric Guitar Natural", "Guitar", 1799.00, 3);

INSERT INTO Products (ProductName,DepartmentName,Price,StockQuantity);
VALUES ("DW Performance Series 4-Piece Shell Pack", "Drum", 1831.99, 6);

INSERT INTO Products (ProductName,DepartmentName,Price,StockQuantity);
VALUES ("Tama Starclassic Performer B/B 5-Piece Shell Pack", "Drum", 1999.99, 10);

INSERT INTO Products (ProductName,DepartmentName,Price,StockQuantity);
VALUES ("ESP LTD RB-1004 Electric Bass Guitar", "Bass", 1249.00, 7);

INSERT INTO Products (ProductName,DepartmentName,Price,StockQuantity);
VALUES ("Ernie Ball Music Man Sterling 4-String Bass Guitar", "Bass", 1279.99, 22);

INSERT INTO Products (ProductName,DepartmentName,Price,StockQuantity);
VALUES ("Spectrasonics Omnisphere 2", "Music Software", 479.00, 68);

INSERT INTO Products (ProductName,DepartmentName,Price,StockQuantity);
VALUES ("KRK ROKIT 5 G3 Powered Studio Monitor Vintage Chrome", "Pro Audio", 199.99, 31);

INSERT INTO Products (ProductName,DepartmentName,Price,StockQuantity);
VALUES ("Behringer XM8500 Microphone", "Pro Audio", 19.99, 3);


