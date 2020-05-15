import { Router } from 'express';

import ProvidersController from '@modules/appointments/infra/http/controllers/ProvidersControllers';
import ProviderMonthAvailabillityController from '@modules/appointments/infra/http/controllers/ProviderMonthAvailabilityController';
import ProviderDayAvailabillityController from '@modules/appointments/infra/http/controllers/ProviderDayAvailabilityController';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const providersRouter = Router();

const providersController = new ProvidersController();
const providerMonthAvailabilityController = new ProviderMonthAvailabillityController();
const providerDayAvailabilityController = new ProviderDayAvailabillityController();

providersRouter.use(ensureAuthenticated);

providersRouter.get('/', providersController.index);

providersRouter.get(
  '/:provider_id/month-availability',
  providerMonthAvailabilityController.index,
);

providersRouter.get(
  '/:provider_id/day-availability',
  providerDayAvailabilityController.index,
);

export default providersRouter;
