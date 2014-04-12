from pyplasm import *
from exercise2 import *
#color
colorLand=rgb([103, 179,34])
colorStreet=rgb([63, 63, 63])
colorfootball=rgb([15,77, 9])
colorTronco=rgb([98, 49,0])
colorPino=rgb([0, 85, 0])
colorTree=rgb([0, 125, 0])
colorCespuglio=rgb([0, 62, 0])
colorPanchine=rgb([174,87, 0])
colorChurch=rgb([128,64, 64])
colorChurch2=rgb([126,126,126])
colorDoor=rgb([53,27,0])
colorWindows=rgb([0,255,128])
colorBuild1=rgb([255,255,128])#giallino
colorBuild2=rgb([255,166,166])#rosa
colorBuild3=rgb([244,80,0])#marrone
colorBuild4=rgb([129,192,192])#azzurro
colorBuild5=rgb([166,228,253])
colorBuild6=rgb([0,255,255])
colorLight=rgb([255,255,47])







#make a street
def street(b,h,x,y,xval,yval):
	str=floor(b,h)
	stre=T([x,y])([xval,yval])(COLOR(colorStreet)(PROD([str,Q(0.2)])))
	return STRUCT([stre])

def building(x,y,z,xpos,ypos,floor):

	build=(T([1,2])([xpos,ypos])(CUBOID([x,y,z])))

	wX=T([1,2,3])([xpos+x/12-x/4,ypos-0.1,z-z/floor])((COLOR(colorWindows)(CUBOID([x/6,0,z/(floor+floor-floor/2)]))))
	windowX=STRUCT(NN(4)([T(1)(x/4), wX]))
	windowX2=STRUCT(NN(floor-3)([T(3)(-z/(floor)), windowX]))
	windowXside=STRUCT(NN(1)([T(2)(y+0.2), windowX2,windowX]))

	wY=T([1,2,3])([xpos-0.1,ypos+x/12-x/4,z-z/floor])((COLOR(colorWindows)(CUBOID([0,x/6,z/(floor+floor-floor/2)]))))
	windowY=STRUCT(NN(4)([T(2)(x/4), wY]))
	windowY2=STRUCT(NN(floor-3)([T(3)(-z/(floor)), windowY]))
	windowYside=STRUCT(NN(1)([T(1)(x+0.2), windowY2,windowY]))

	door=(COLOR(colorDoor)(T([1,2,3])([xpos+(x/2)-(x/6),ypos+0.1,0.1])(CUBOID([x/3,y,z/(floor-floor/3.5)]))))


	build_t=STRUCT([build,windowX,windowX2,windowXside,door,windowY,windowY2,windowYside])
	return build_t

land = COLOR(colorLand)(floor(200,120))

tempio=T([1,2])([25,70])(S([1,2,3])([1.6,1.6,1.2])(STRUCT([steps_t,floor4a,floor4b,floor4c,floor5,floor6,floor7,floor8])))

#streets
street1= street(4,120,1,0,2,0)
street2= street(196,4,1,2,4,110)
street3= street(196,4,1,2,4,30)
street4= street(196,4,1,2,4,2)
street5= street(4,86,1,2,120,34)
street6= street(120,4,1,2,4,60)
street7= street(4,120,1,2,194,0)
street8= street(4,28,1,2,70,6)
street9= street(20,4,1,2,100,85)



# building

build1=building(20,20,30,10,8,6)
build2=S([1,2,3])([1.2,1,0.8])(T([1,2])([25,0.5])(COLOR(colorBuild2)(build1)))
build3=COLOR(colorBuild3)(S([1,2,3])([1.3,1,0.6])(T([1,2])([2,30])(build1)))
build4=COLOR(colorBuild1)(S([1,2,3])([1.2,1,0.8])(T([1,2])([35,30.5])(build1)))
build5=COLOR(colorBuild4)(S([1,2,3])([1.4,1,0.5])(T([1,2])([55,30.5])(build1)))
build6=COLOR(COLORE4)(S([1,2,3])([1,1,0.7])(T([1,2])([70,0.5])(build1)))
build7=COLOR(colorBuild3)(S([1,2,3])([1,1,0.9])(T([1,2])([100,0.5])(build1)))
build8=COLOR(WHITE)(building(20,20,90,140,8,18))
build9=S([1,2,3])([1,1,0.9])(T([1,2])([30,0.5])(build8))


#football
def cerchio(r):
	def circle0(p):
		a=p[0]
		return [r*COS(p[a]), r*SIN(p[a])]
	return circle0

fotb=COLOR(colorfootball)(T([1,2,3])([140,40,0.1])(floor(50,30)))
fotb1=SKELETON(1)(COLOR(WHITE)(T([1,2,3])([140,40,0.1])(floor(50,30))))
centrocampo=COLOR(WHITE)(T([1,2,3])([165,40,0.2])(floor(0.5,30)))
c = STRUCT([COLOR(WHITE)(T([1,2,3])([166,55,0.2])(RING([5,5])([70,80])))])
area1=SKELETON(1)(COLOR(WHITE)(T([1,2,3])([140,48,0.1])(floor(7,14))))
area2=SKELETON(1)(COLOR(WHITE)(T([1,2,3])([183,48,0.1])(floor(7,14))))

football=STRUCT([fotb,fotb1,centrocampo,c,area1,area2])
stadium=T([1,2])([60,18])(S([1,2,3])([0.6,0.6,1])(football))

#church
def cross(xval,yval,zval):
	b=COLOR(BLACK)(T([1,2,3])([xval-1.26,yval,zval+2.5])(CUBOID([3,0.1,0.5])))
	h=COLOR(BLACK)(T([1,2,3])([xval,yval,zval])(CUBOID([0.5,0.1,5])))

	return STRUCT([b,h])

first=COLOR(colorChurch)(T([1,2,3])([140,80,0.1])(CUBOID([15,25,20])))
second=COLOR(colorChurch2)(T([1,2,3])([138.9,106.6,20])(R([2,3])(PI/2)(PROD([triangle_generator(17.3,7),Q(28.2)]))))
cross1=cross(147,79,27)
triangle=R([2,3])(PI/2)(second)
campanile=COLOR(colorChurch)(T([1,2,3])([155,80,0.1])(CUBOID([8,7,35])))
campanile2=COLOR(colorChurch2)(T([1,2,3])([155,87,35.1])(R([2,3])(PI/2)(PROD([triangle_generator(8,5),Q(7)]))))
door=(COLOR(colorDoor)(T([1,2,3])([147.5,79.8,0.1])(CUBOID([4,0,8]))))



#orologio
background = COLOR([1,0.75,0])(CIRCLE(10)([48,1]))
minute = T([1,2])([-0.05,-0.05])(CUBOID([9,1])) 
hour = T([1,2])([-0.1,-0.1])(CUBOID([7,2])) 
tick = T([1,2])([-1,8])(CUBOID([0.5,1])) 
ticks = STRUCT(NN(12)([ tick, R([1,2])(PI/6) ]))

def clock2D (h,m):
		return STRUCT ([ background , ticks , R([1,2])( PI/2 - (h + m/60)*PI/6 )(hour), R([1,2])( PI/2 - m*PI/30 )(minute) ])

def clock3D (h,m): 
	return STRUCT ([COLOR([1,0.75,0])(PROD([ background , Q(2) ])),T(3)(2.)(PROD([ ticks, Q(0.5) ])), T(3)(2),
R([1,2])( PI/2 - (h + m/60.)*PI/6 )(PROD([ hour, Q(0.3) ])),T(3)(0.3),R([1,2])( PI/2 - m*PI/30 )(PROD([ minute, Q(0.3) ])) ])
tm = clock3D(6,55)
time = S([1,2,3])([0.2,0.2,0.2])(R([2,3])(PI/2)(tm))


church=STRUCT([first,second,campanile,campanile2,door,T([1,2,3])([158.8,80,33.1])(time)])

buildT=STRUCT([build1,build2,build3,build4,build5,build6,build7,build8,build9])

street_total=STRUCT([street1,street2,street3,street4,street5,street6,street7,street8,street9,cross1])


#RIALZA TUTTO DAL PIANO DI 0.2 IN MODO DA EVITARE IL BUG DEL COLORE
place=T([3])([0.1])(STRUCT([tempio,street_total,buildT,stadium,church]))
total_place=STRUCT([land,place])
VIEW(total_place)