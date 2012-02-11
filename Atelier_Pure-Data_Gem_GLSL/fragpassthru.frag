//fragment program
// tous les pixels passent en rouge

uniform float colorR;


void main()
{
	gl_FragColor = vec4(colorR,0.0,0.0,1.0);
}
