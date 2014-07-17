function WallList(){
    var Wall = new THREE.Object3D();
    
    vert1=[[0.3, 0.3], [3.39375,  0.3], [3.39375,  5.3], [6.20625, 5.3], [6.20625, 0.3], [9.3,  0.3], [9.3,  6.3], [0.3, 6.3]]
    vert2=[[9.3, 6.3], [17.6,6.3], [17.6, 0.3], [9.3, 0.3],[9.3, 6.3]]
    vert3=[[17.6, 6.3], [25.9, 6.3], [25.9,0.3], [17.6,0.3],[17.6, 6.3]]
    vert3a=[[25.5, 5.1], [18.3,5.1], [18.3, 2.7], [25.5, 2.7]]

    vertBagno1c=[[17.9, 5.04],[20.5666667, 5.04],[20.5666667, 2.8531915],[23.2333333,2.8531915],[23.2333333, 5.04],[25.9, 5.04], [25.9,0.3], [17.9,0.3],[17.9, 5.04]]
    
    vert4=[[26.2, 0.3], [26.2, 6.3], [39.2, 6.3], [39.2, 0.3],[34.2234375, 0.3],[34.2234375, 5.3],[31.1765625, 5.3],[31.1765625, 0.3]]

    vert5=[[34.9, 6.3], [12.6, 6.3], [12.6, 0.3], [34.9, 0.3]]
    vert5a=[[30.6608696, 5.406383], [28.4869565, 5.406383], [ 28.4869565, 2.8531915],[30.6608696, 2.8531915]]
    vert5a1=[[17.3068966, 2.8531915], [17.3068966, 5.406383], [14.8931034, 5.406383], [14.8931034, 2.8531915]]

    vert7=[[12.3, 6.3], [0.3, 6.3], [0.3, 0.3], [12.3, 0.3]]
    vert7a=[[7.4111111, 5.406383], [5.1888889, 5.406383], [ 5.1888889, 2.8531915], [7.4111111, 2.8531915]]

    vert8=[[39.2, 6.3], [17.9,  6.3], [17.9, 0.3], [39.2,  0.3]]
    vert8a=[[33.8016949, 5.406383], [31.5983051, 5.406383], [31.5983051,2.8531915],[33.8016949, 2.8531915],[33.8016949, 5.406383]]

    vert9=[[17.6,  6.3], [9.6,  6.3], [9.6,  0.3], [17.6, 0.3],[17.6,  6.3]]
    vert9a=[[12.2666667, 2.8531915], [14.9333333,  2.8531915], [14.9333333, 5.406383],[12.2666667, 5.406383], [12.2666667, 2.8531915]]

    vertBagno2c=[[17.6,  5.04],[14.9333333, 5.04],[14.9333333,  2.8531915],[12.2666667, 2.8531915],[12.2666667, 5.04],[9.6,  5.04], [9.6,  0.3], [17.6, 0.3],[17.6,  5.04]]

    vert10=[[9.3,  6.3], [0.3,  6.3], [0.3,  0.3], [9.3,  0.3]]

    vert11=[[0.3, 6.3], [ 35, 6.3], [ 35, 0.3],[ 7.4666667, 0.3],[7.4666667, 5.3],[4.5095238, 5.3],[ 4.5095238, 0.3],[0.3, 0.3]]

    vert12=[[0.3, 6.3], [ 19.95, 6.3], [19.95, 0.3],[17.6, 0.3],[17.6, 5.3],[14.6, 5.3],[14.6, 0.3],[0.3, 0.3]]

    vert13=[[17.6,  6.3], [9.22,  6.3], [9.22,  0.3], [17.6, 0.3],[17.6,  6.3]]

    vert14=[[17.6, 0.3], [20.5666667,0.3], [20.5666667,5.3], [23.2333333, 5.3], [23.2333333, 0.3], [25.9, 0.3], [25.9,6.3], [17.6, 6.3], [17.6, 0.3]]

    vertBagno1a=[[20, 0.3], [20.5666667,0.3], [20.5666667,6.3],[20, 6.3], [20, 0.3]]
    vertBagno1b=[ [23.2333333, 6.3], [23.2333333, 0.3], [25.9, 0.3], [25.9,6.3],[23.2333333, 6.3]]

    vert15=[[9.6, 0.3],[20.5666667,0.3], [20.5666667, 5.3], [23.2333333, 5.3], [23.2333333,0.3], [25.9,0.3], [25.9, 6.3], [9.6, 6.3], [9.6, 0.3]]

    vert16=[[9.6, 0.3], [12.3755102, 0.3], [12.3755102, 5.3], [14.8244898,5.3], [14.8244898,0.3], [20.5666667,0.3], [20.5666667, 5.3], [23.2333333, 5.3], [23.2333333,0.3], [25.9,0.3], [25.9, 6.3], [9.6, 6.3], [9.6, 0.3]]

    vert17=[[17.6,  6.3], [9.6,  6.3], [9.6,  0.3],[12.3755102,  0.3],[12.3755102, 5.3],[14.8244898, 5.3],[14.8244898, 0.3], [17.6, 0.3]]

    vertBagno2a=[[17.6,  6.3],[14.8244898, 6.3],[14.8244898, 0.3], [17.6, 0.3],[17.6,  6.3]]

    vertBagno2b=[[9.6,  6.3], [9.6,  0.3],[12.3755102,  0.3],[12.3755102, 6.3],[9.6,  6.3]]


    vert18=[[12.6, 0.3], [14.6, 0.3], [14.6, 5.3], [17.6, 5.3], [17.6, 0.3], [19.6, 0.3], [19.6, 6.3], [12.6, 6.3], [12.6, 0.3]]

    vert19=[[19.6, 0.3], [17.6, 0.3], [17.6, 5.3], [14.6, 5.3], [14.6, 0.3], [12.6, 0.3], [12.6, 6.3], [19.6, 6.3], [19.6, 0.3]]


    vert20=[[12.6, 0.3], [14.6, 0.3], [14.6, 5.3], [17.6, 5.3], [17.6, 0.3], [34.9, 0.0], [34.9, 6.3], [12.6, 6.3], [12.6, 0.3]]


    vert21=[[17.9, 0.3], [20.5666667, 0.3], [20.5666667,5.3], [23.2333333, 5.3], [23.2333333,0.3], [39.2,0.3], [39.2,6.3], [17.9,6.3], [17.9, 0.3]]

    vert22=[[ 0.3, 0.3], [12.3, 0.3], [12.3, 6.3], [0.3, 6.3],[ 0.3, 0.3]]

    vertBagno2=[[ 0.3, 0.3], [12.3, 0.3], [12.3, 6.3], [0.3, 6.3],[ 0.3, 0.3]]


    vert24=[[ 0.3, 0.3], [12.3, 0.3], [12.3, 6.3], [0.3, 6.3],[ 0.3, 0.3]]

    vert25=[[19.9, 0.0], [34.9, 0.0], [34.9, 6.3], [19.9, 6.3],[19.9, 0.0]]

    vertBagno=[[19.9, 0.0], [34.9, 0.0], [34.9, 6.3], [19.9, 6.3],[19.9, 0.0]]

    vert27=[[19.9, 0.0], [34.9, 0.0], [34.9, 6.3], [19.9, 6.3],[19.9, 0.0]]

    vert28=[[26.2, 0.3], [39.2,0.3], [39.2,6.3], [26.2,6.3]]

    vertOut1=[[-0.2,0.0], [39.5, 0.0], [39.5, 6.3], [-0.2, 6.3], [-0.2, 0.0]]
    vertOut1a=[[12.2666667, 2.8531915], [14.9333333,  2.8531915], [14.9333333, 5.406383],[12.2666667, 5.406383], [12.2666667, 2.8531915]]
    vertOut1b=[[31.5983051, 2.8531915], [33.8016949,2.8531915], [33.8016949, 5.406383],[31.5983051, 5.406383], [31.5983051, 2.8531915]]

    vertOut2=[[-0.05, 0.0], [35.25, 0.0], [35.25, 6.3], [-0.05, 6.3], [-0.05, 0.0]]
    vertOut2a=[[5.1888889, 2.8531915], [7.4111111, 2.8531915], [ 7.4111111, 5.406383], [5.1888889, 5.406383], [5.1888889, 2.8531915]]
    vertOut2b=[[14.8931034, 2.8531915], [17.3068966, 2.8531915], [17.3068966, 5.406383],[14.8931034, 5.406383],[14.8931034, 2.8531915]]
    vertOut2c=[[28.4869565, 2.8531915], [30.6608696, 2.8531915], [30.6608696, 5.406383], [28.4869565, 5.406383],[28.4869565, 2.8531915]]

    vertOut3=[[39.55, 0], [34.2234375,0], [34.2234375, 5.3], [31.1765625,5.3], [31.1765625, 0], [6.20625, 0], [6.20625, 5.3], [3.39375,5.3], [3.39375,0], [-0.05,0], [-0.05,6.3], [39.55,6.3], [39.55,0]]
    vertOut3a=[[25.5, 5.1], [18.3,5.1], [18.3, 2.7], [25.5, 2.7]]

    vertOut4=[[35.25, 0.0], [7.9, 0.0], [7.9, 5.3], [4.3295238, 5.3], [4.3295238, 0.0], [-0.05, 0.0], [-0.05, 6.3], [35.25, 6.3], [35.25, 0.0]]


    p1 = createTexturedShape(Wall,"spatolato.jpg",vert1,0.08,0.08);
    p1.position.y=34.88;
    p1.rotation.x = 1/2*Math.PI;

    p2 = createTexturedShape(Wall,"spatolato.jpg",vert2,0.08,0.08);
    p2.position.y=34.88;
    p2.rotation.x = 1/2*Math.PI;
    
    p3=createTexturedShape(Wall,"spatolato.jpg",vert3,0.05,0.05,[vert3a]);
    p3.position.y=34.88;
    p3.rotation.x = 1/2*Math.PI;
    
    p4 = createTexturedShape(Wall,"Spatolato.jpg",vert4,0.05,0.05);
    p4.position.y=34.88;
    p4.rotation.x = 1/2*Math.PI;

    p5 = createTexturedShape(Wall,"Spatolato.jpg",vert5,0.02,0.02,[vert5a,vert5a1]);
    p5.position.x=39.15
    p5.rotation.x = 1/2*Math.PI;
    p5.rotation.y = 1/2*Math.PI;Wall,


    p7 = createTexturedShape(Wall,"grigio.jpg",vert7,0.1,0.1,[vert7a]);
    p7.position.y=12.6
    p7.position.x=39.15 
    p7.rotation.x = 1/2*Math.PI;
    p7.rotation.y = 3/2*Math.PI;


    p8 = createTexturedShape(Wall,"grigio.jpg",vert8,0.1,0.1,[vert8a]);
    p8.position.y=0.35;
    p8.rotation.x = 1/2*Math.PI;


    p9 = createTexturedShape(Wall,"spatolato.jpg",vert9,1,1,[vert9a]);
    p9.position.y=0.35;
    p9.rotation.x = 1/2*Math.PI;

    p10 = createTexturedShape(Wall,"spatolato.jpg",vert10,0.08,0.08);
    p10.position.y=0.35;
    p10.rotation.x = 1/2*Math.PI;

    p11 = createTexturedShape(Wall,"spatolato.jpg",vert11,0.1,0.1);
    p11.position.x= 0.35
    p11.rotation.x = 1/2*Math.PI;
    p11.rotation.y = 1/2*Math.PI;


    p12 = createTexturedShape(Wall,"spatolato.jpg",vert12,0.08,0.08);
    p12.position.x= 9.25
    p12.rotation.x = 1/2*Math.PI;
    p12.rotation.y = 1/2*Math.PI;

    p13 = createTexturedShape(Wall,"spatolato.jpg",vert13,0.08,0.08);
    p13.position.y=19.95;
    p13.rotation.x = 1/2*Math.PI;

    p14 = createTexturedShape(Wall,"spatolato.jpg",vert14,0.08,0.08);
    p14.position.y=19.95;
    p14.rotation.x = 1/2*Math.PI;


    p15 = createTexturedShape(Wall,"spatolato.jpg",vert15,0.08,0.08);
    p15.position.y=19.55;
    p15.rotation.x = 1/2*Math.PI;


    p16 = createTexturedShape(Wall,"spatolato.jpg",vert16,0.08,0.08);
    p16.position.y=12.65;
    p16.rotation.x = 1/2*Math.PI;
  
    p17 = createTexturedShape(Wall,"spatolato.jpg",vert17,0.08,0.08);
    p17.position.y=12.25;
    p17.rotation.x = 1/2*Math.PI;

    p18 = createTexturedShape(Wall,"spatolato.jpg",vert18,0.08,0.08);
    p18.position.x= 9.65
    p18.rotation.x = 1/2*Math.PI;
    p18.rotation.y = 1/2*Math.PI;

    p19 = createTexturedShape(Wall,"spatolato.jpg",vert19,0.08,0.08);
    p19.position.x= 25.85
    p19.rotation.x = 1/2*Math.PI;
    p19.rotation.y = 1/2*Math.PI;


    p20 = createTexturedShape(Wall,"Spatolato.jpg",vert20,0.08,0.08);
    p20.rotation.x = 1/2*Math.PI;
    p20.rotation.y = 1/2*Math.PI;
    p20.position.x=26.25

    p21 = createTexturedShape(Wall,"grigio.jpg",vert21,0.1,0.1);
    p21.position.y=12.25;
    p21.rotation.x = 1/2*Math.PI;


    p22 = createTexturedShape(Wall,"spatolato.jpg",vert22,0.08,0.08);
    p22.rotation.x = 1/2*Math.PI;
    p22.rotation.y = 1/2*Math.PI;
    p22.position.x=9.65


    p23 = createTexturedShape(Wall,"spatolato.jpg",vert22,0.5,0.5);
    p23.rotation.x = 1/2*Math.PI;
    p23.rotation.y = 1/2*Math.PI;
    p23.position.x=17.55

    p24 = createTexturedShape(Wall,"grigio.jpg",vert24,0.08,0.08);
    p24.rotation.x = 1/2*Math.PI;
    p24.rotation.y = 1/2*Math.PI;
    p24.position.x=18


    p27 = createTexturedShape(Wall,"spatolato.jpg",vert27,0.08,0.08);
    p27.rotation.x = 1/2*Math.PI;
    p27.rotation.y = 1/2*Math.PI;
    p27.position.x=25.85

    p28 = createTexturedShape(Wall,"Spatolato.jpg",vert28,0.08,0.08);
    p28.position.y=12.65;
    p28.rotation.x = 1/2*Math.PI;

    pOut1 = createTexturedShape(Wall,"mattonato.jpg",vertOut1,0.3,0.3,[vertOut1a,vertOut1b]);
    addBumpMap(pOut1, "mattonato.jpg", 0.5, 0.3, 0.3);
    pOut1.rotation.x = 1/2*Math.PI;
    pOut1.position.y=-0.05;
    pOut1.position.x=0.1;


    pOut2 = createTexturedShape(Wall,"mattonato.jpg",vertOut2,0.3,0.3,[vertOut2a,vertOut2b,vertOut2c]);
    addBumpMap(pOut2, "mattonato.jpg", 0.5, 0.3, 0.3);

    pOut2.position.x=39.55;
    pOut2.rotation.x = 1/2*Math.PI;
    pOut2.rotation.y = 1/2*Math.PI;

    pOut3 = createTexturedShape(Wall,"mattonato.jpg",vertOut3,0.3,0.3,[vertOut3a]);
    addBumpMap(pOut3, "mattonato.jpg", 0.5, 0.3, 0.3);

    pOut3.position.y=35.25;
    pOut3.rotation.x = 1/2*Math.PI;

    pOut4 = createTexturedShape(Wall,"mattonato.jpg",vertOut4,0.3,0.3);
    addBumpMap(pOut4, "mattonato.jpg", 0.5, 0.3, 0.3);

    pOut4.position.x=-0.05;
    pOut4.rotation.x = 1/2*Math.PI;
    pOut4.rotation.y = 1/2*Math.PI;


    cucina1 = createTexturedShape(Wall,"paretiCucina.jpg",vertBagno1a,0.6,0.6);
    cucina1.scale.y=0.8;
    cucina1.position.y=20;
    cucina1.rotation.x = 1/2*Math.PI;
    cucina1 = createTexturedShape(Wall,"paretiCucina.jpg",vertBagno1b,0.6,0.6);
    cucina1.scale.y=0.8;
    cucina1.position.y=20;
    cucina1.rotation.x = 1/2*Math.PI;

    cucina3 = createTexturedShape(Wall,"paretiCucina.jpg",vert27,0.6,0.6);
    cucina3.scale.y=0.8;
    cucina3.rotation.x = 1/2*Math.PI;
    cucina3.rotation.y = 1/2*Math.PI;
    cucina3.position.x=25.8;


    bagnoB1 = createTexturedShape(Wall,"paretiBagno2.jpg",vertBagno2,0.2,0.2);
    bagnoB1.scale.y=0.8;
    bagnoB1.rotation.x = 1/2*Math.PI;
    bagnoB1.rotation.y = 1/2*Math.PI;
    bagnoB1.position.x=9.75


    bagnoB2 = createTexturedShape(Wall,"paretiBagno2.jpg",vertBagno2,0.2,0.2);
    bagnoB2.scale.y=0.8;

    bagnoB2.rotation.x = 1/2*Math.PI;
    bagnoB2.rotation.y = 1/2*Math.PI;
    bagnoB2.position.x=17.45;


    bagnoB3 = createTexturedShape(Wall,"paretiBagno2.jpg",vertBagno2a,0.2,0.2);
    bagnoB3.scale.y=0.8;

    bagnoB3.position.y=12.20;
    bagnoB3.rotation.x = 1/2*Math.PI;
    bagnoB3 = createTexturedShape(Wall,"paretiBagno2.jpg",vertBagno2b,0.2,0.2);
    bagnoB3.scale.y=0.8;
    bagnoB3.position.y=12.20;
    bagnoB3.rotation.x = 1/2*Math.PI;


    bagnoB4 = createTexturedShape(Wall,"paretiBagno2.jpg",vertBagno2c,0.2,0.2);
    bagnoB4.position.y=0.4;
    bagnoB4.rotation.x = 1/2*Math.PI;

    return Wall;

}

function createPlane(vert,textu,x,y){
    var floor = new THREE.Object3D();
    pav1=createTexturedShape(floor,textu,vert,x,y);
    floor.pav1 = pav1;
    floor.add(pav1);

return floor
}

function PlaneList(){
    var floor = new THREE.Object3D();

    vertParquet=[[0.3, 0.3], [9.3, 0.3], [9.3, 12.5], [17.9, 12.5], [17.9, 0.3], [39.2,0.3], [39.2, 35], [26.2, 35], [26.2, 19.7], [20, 19.7], [20, 35], [0.3, 35], [0.3, 0.3]]
    vertCotto=[[39.5, 45.5], [0.0, 45.5], [0.0, 35], [39.5, 35]]
    vertCucina=[[25.9, 34.9], [20, 34.9], [20, 19.7], [25.9, 19.7]]
    vertBagno2=[[9.6, 12.5], [9.6, 0.3], [17.9, 0.3], [17.9, 12.5]]

    floor.add(createPlane(vertParquet,"parquet.jpg",0.1,0.1));
    //floor.add(createPlane(vertCotto,"cotto.jpg",0.16,0.16));
    floor.add(createPlane(vertCucina,"pavimentoCucina.jpg",0.5,0.5));
    floor.add(createPlane(vertBagno2,"pavimentoBagno.jpg",0.5,0.5));

    return floor;
}