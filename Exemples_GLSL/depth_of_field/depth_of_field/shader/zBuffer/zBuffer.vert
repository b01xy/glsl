varying float depth;
uniform float focalDistance;
void main()
{
	gl_FrontColor=gl_Color;
	vec4 v = (gl_ModelViewMatrix * gl_Vertex) * focalDistance; // ** focalDistance *-0.1
	depth = v.z;
	gl_Position = gl_ModelViewProjectionMatrix * gl_Vertex;	
}

