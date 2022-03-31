import { Request, Response } from 'express';

import { CreateSpecificationUC } from './CreateSpecificationUC';

class CreateSpecificationController {
  constructor(private createSpecificationUC: CreateSpecificationUC) {}

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    const specification = this.createSpecificationUC.execute({
      name,
      description,
    });

    return response.status(200).json({ specification });
  }
}

export { CreateSpecificationController };
