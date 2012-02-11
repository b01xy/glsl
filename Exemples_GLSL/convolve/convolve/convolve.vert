varying vec2 texcoord0;


void main()
{
	
    texcoord0 = gl_MultiTexCoord0.st;
    gl_Position = ftransform();

}
