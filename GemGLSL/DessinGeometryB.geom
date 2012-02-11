//
#version 120
#extension GL_EXT_geometry_shader4: enable
int i, j;

void main()
{
	for (j=0; j<10; j++) {
		for (i=0; i<gl_VerticesIn; i++) {
			vec4 pos = gl_PositionIn[i];
			pos += vec4(0.1*float(j),0.1*float(j),0.0,0.0);
			gl_Position = pos;
			EmitVertex();

		}
		EndPrimitive();
	}
}

