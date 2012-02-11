uniform sampler2DRect tex0;
uniform sampler2DRect tex1;

varying vec2 texcoord0;
varying vec2 texcoord1;

uniform float imagegain;
uniform float imagecontrast;

uniform int invert;

uniform float dotdistance;

float dotdistanceX = dotdistance * 2.0;
float dotdistanceY = dotdistance * 1.0;

float halfdistanceX = dotdistanceX / 2.0;
float halfdistanceY = dotdistanceY / 2.0;

float quaterdistanceX = dotdistanceX / 4.0;
float quaterdistanceY = dotdistanceY / 4.0;


float contrast = ( imagecontrast * 2. )* ( imagecontrast * 2. ) * ( imagecontrast * 2. ) * ( imagecontrast * 2. );
float gain = imagegain - (imagecontrast -0.5) ;

void main()
{	
	
	float baseX = floor((texcoord0.x) / dotdistanceX) * dotdistanceX; 
	float baseY = floor((texcoord0.y) / dotdistanceY) * dotdistanceY; 
	
	vec4 color = texture2DRect(tex0, vec2(baseX, baseY));

	float grey = ( ( (color.x + color.y + color.z) / 3.0 ) * contrast + gain ) * 255. ;
	
	grey = clamp ( grey, 0.0, 255.0 );
	
	grey = 255. - grey;
	
	float asciinumber = float ( ( ( grey - 30. ) / 26. ) ) * float( grey > 30.);
	
	float distX = texcoord0.x - baseX;
	float distY = texcoord0.y - baseY;
	
	float coordX = ( ( distX / dotdistanceX ) / 23.0 + ( floor(asciinumber) - 1.  ) /23.0 )  * 1380.;
	float coordY = ( distY / dotdistanceY ) * 30.;

	vec4 col = texture2DRect(tex1, vec2(coordX, coordY));
	
	vec4 col_inv = 1.0 - col;

	vec4 result = float (1 - invert) * col + float (invert) * col_inv;
	
	
	gl_FragColor = result;

} 
