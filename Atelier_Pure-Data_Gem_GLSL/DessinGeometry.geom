//
#version 120
// version de glsl à indiquer obligatoirement pour pouvoir attaquer les geometries
#extension GL_EXT_geometry_shader4: enable
int i;
//for (i=0; i<gl_VerticesIn; i++) à chaque fois qu'il y a un vertex, il applique la boucle, ici on parcours les vertexs de l'objet [square]

void main()
{
	for (i=0; i<gl_VerticesIn; i++) {
//option2 : virer ligne ci-dessous
		gl_FrontColor=gl_FrontColorIn[i];
		gl_TexCoord[0] = gl_TexCoordIn[i][0];
		vec4 pos = gl_PositionIn[i];
		pos += vec4(-0.1, -0.1, 0.0, 0.0);
		gl_Position=pos;
		EmitVertex();
		pos += vec4(0.0, 0.2, 0.0, 0.0);
		gl_Position=pos;
		EmitVertex();
		pos += vec4(0.2, 0.0, 0.0, 0.0);
		gl_Position=pos;
		EmitVertex();
		pos += vec4(0.0, -0.2, 0.0, 0.0);
		gl_Position=pos;
		EmitVertex();
		pos += vec4(-0.2, 0.0, 0.0, 0.0);
		gl_Position=pos;
		EmitVertex();
		EndPrimitive();
	}
}
// si on veut que les carrés tournent dans le "monde" on remplace par 
// gl_Position=gl_ProjectionMatrix*gl_ModelViewMatrix*pos;
