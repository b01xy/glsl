uniform sampler2DRect tex;

varying vec2 texcoord0;

uniform float dotdistance;
float halfdistance = dotdistance / 2.0;
float quaterdistance = dotdistance / 4.0;

uniform vec2 offset_red;
uniform vec2 offset_green;
uniform vec2 offset_blue;



void main()
{	
	vec2 offsetr = offset_red * (dotdistance / 5.0);
	vec2 offsetg = offset_green * (dotdistance / 5.0);
	vec2 offsetb = offset_blue * (dotdistance / 5.0);
	
	float baseXr = floor((texcoord0.x - offsetr.x) / dotdistance) * dotdistance + halfdistance + offsetr.x; 
	float baseYr = floor((texcoord0.y - offsetr.y) / dotdistance) * dotdistance + halfdistance + offsetr.y; 
	
	float distanceXr = abs(texcoord0.x - baseXr);
	float distanceYr = abs(texcoord0.y - baseYr);

	float distancer = sqrt(pow(distanceXr, 2.0) + pow(distanceYr, 2.0));

	float visibilityr = float(distancer< (quaterdistance) ) + float(distancer >= (quaterdistance) ) *  ( (halfdistance - distancer) / quaterdistance);

	float baseXg = floor((texcoord0.x - offsetg.x) / dotdistance) * dotdistance + halfdistance + offsetg.x; 
	float baseYg = floor((texcoord0.y - offsetg.y) / dotdistance) * dotdistance + halfdistance + offsetg.y; 
	
	float distanceXg = abs(texcoord0.x - baseXg);
	float distanceYg = abs(texcoord0.y - baseYg);

	float distanceg = sqrt(pow(distanceXg, 2.0) + pow(distanceYg, 2.0));

	float visibilityg = float(distanceg< (quaterdistance) ) + float(distanceg >= (quaterdistance) ) *  ( (halfdistance - distanceg) / quaterdistance);

	float baseXb = floor((texcoord0.x - offsetb.x) / dotdistance) * dotdistance + halfdistance + offsetb.x; 
	float baseYb = floor((texcoord0.y - offsetb.y) / dotdistance) * dotdistance + halfdistance + offsetb.y; 
	
	float distanceXb = abs(texcoord0.x - baseXb);
	float distanceYb = abs(texcoord0.y - baseYb);

	float distanceb = sqrt(pow(distanceXb, 2.0) + pow(distanceYb, 2.0));

	float visibilityb = float(distanceb< (quaterdistance) ) + float(distanceb >= (quaterdistance) ) *  ( (halfdistance - distanceb) / quaterdistance);

	vec4 stuffr = texture2DRect(tex, vec2(baseXr, baseYr));
	vec4 stuffg = texture2DRect(tex, vec2(baseXg, baseYg));
	vec4 stuffb = texture2DRect(tex, vec2(baseXb, baseYb));

	//gl_FragColor = stuff;
	gl_FragColor = vec4(stuffr.x * visibilityr, stuffg.y * visibilityg, stuffb.z * visibilityb, 1.0);
	
} 