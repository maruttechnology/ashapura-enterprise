import aboutUs from './about-us.jpg';
import anglesCloseup from './angles-closeup.jpg';
import beamsStacked from './beams-stacked.jpg';
import channels from './channels.jpg';
import construction from './construction.jpg';
import engineering from './engineering.jpg';
import godown from './Godown.jpg';
import godownWideShot from './godown-wide-shot.jpg';
import infrastructure from './infrastructure.jpg';
import manufacturing from './manafucturing.jpg';
import pattaPatti from './patta-patti.jpg';
import roundBarsBundle from './round-bars-bundle.jpg';
import sheets from './sheets.jpg';
import squareBars from './square-bars.jpg';
import squareTubesRacked from './square-tubes-racked.jpg';
import tmt from './TMT.jpg';
import welding from './welding.jpg';

export {
  aboutUs,
  anglesCloseup,
  beamsStacked,
  channels,
  construction,
  engineering,
  godown,
  godownWideShot,
  infrastructure,
  manufacturing,
  pattaPatti,
  roundBarsBundle,
  sheets,
  squareBars,
  squareTubesRacked,
  tmt,
  welding,
};

// One dedicated photo per product, keyed by content collection id (slug).
export const productImagesById: Record<string, ImageMetadata> = {
  'ms-angles': anglesCloseup,
  'ms-pipes': squareTubesRacked,
  'bright-bars': roundBarsBundle,
  'square-bars': squareBars,
  channels: channels,
  'round-bars': roundBarsBundle,
  'pata-patti': pattaPatti,
  'hr-sheets': sheets,
  beams: beamsStacked,
  'tmt-bars': tmt,
};

export const stockImages = [
  aboutUs,
  anglesCloseup,
  beamsStacked,
  channels,
  construction,
  engineering,
  godown,
  godownWideShot,
  infrastructure,
  manufacturing,
  pattaPatti,
  roundBarsBundle,
  sheets,
  squareBars,
  squareTubesRacked,
  tmt,
  welding,
];
