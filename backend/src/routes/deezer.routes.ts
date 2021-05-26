import * as express from 'express';
import { Request, Response } from 'express';
import { Deezer } from '../functions/deezer';


const deezerRouter = express.Router();

deezerRouter.get('/search/:term', (req: Request, res: Response) => {
  new Deezer().searchArtist(req.params.term)
  .then((result) => {
    res.statusCode = 200;
    const {data:{data}} = result;
    res.send(data);
  })
  .catch((err) => {
    console.error(err);
    res.status(500).send(err);
  });
});

deezerRouter.get('/album/:albumId', (req: Request, res: Response) => {
  new Deezer().getAlbumById(req.params.albumId)
  .then((result) => {
    const {data} = result;
    res.statusCode = 200;
    res.send(data);
  })
  .catch((err) => {
    console.error(err);
    res.status(500).send(err);
  });
});

deezerRouter.get('/artist/:artistId', (req: Request, res: Response) => {
    new Deezer().getArtistById(req.params.artistId)
    .then((result) => {
      res.statusCode = 200;
      res.send(result);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send(err);
    });
});

export default deezerRouter;
