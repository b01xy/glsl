varying float depth;

void main (void)
{
	vec4 color = gl_Color;
	

	/*color.r = (depth * -1.0) + 1.0;
	color.g = (depth * -1.0) + 1.0;
	color.b = (depth * -1.0) + 1.0;*/
	color.r = depth;
	color.g = depth;
	color.b = depth;
	gl_FragColor =  color;

}


