// src/swagger.ts

import { INestApplication } from '@nestjs/common';
import * as swaggerUi from 'swagger-ui-express';
import * as fs from 'fs';
import * as path from 'path';

export function setupSwagger(app: INestApplication) {
  // Read the YAML file
  const swaggerDocument = fs.readFileSync(
    path.resolve(__dirname, '../api-swagger.yaml'),
    'utf8',
  );

  // Parse YAML content
  const swaggerOptions = {
    swaggerOptions: {
      url: '/swagger/api-docs',
    },
    customSiteTitle: 'Microservice API Documentation',
  };

  // Serve Swagger UI at /docs endpoint
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(null, swaggerOptions));

  // Serve the YAML file for Swagger UI
  app.use('/swagger/api-docs', (req, res) => {
    res.type('yaml').send(swaggerDocument);
  });
}
