import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { IndexLogsService } from '../services/IndexLogs.service';

class LogController {
  async index(req: Request, res: Response): Promise<Response> {
    const indexLogsService = container.resolve(IndexLogsService);

    const logs = await indexLogsService.execute();

    return res.status(200).json(logs);
  }
}

export { LogController };
