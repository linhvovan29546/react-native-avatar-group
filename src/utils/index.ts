import initials from 'initials';

const charSymbol = (name: string) => {
  const nameSplit = name.replace(/[^\w\s]/gi, '');
  let initials: any = nameSplit.match(/\b\w/g) || [];
  initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
  return initials;
};

export function getInitialName(name: string) {
  return name
    ? name.split(' ').length == 1
      ? initials(name.toLowerCase())
        .toString()
        .toUpperCase()
      : charSymbol(name)
    : '';
}

export function renderFacePile(faces: any[], numFaces: number) {
  const entities = [...faces.reverse()];
  if (!entities.length) return {
    facesToRender: [],
    overflow: 0
  }

  const facesToRender = entities.slice(0, numFaces)
  const overflow = entities.length - facesToRender.length
  return {
    facesToRender,
    overflow
  }
}
export const generateColor = () => {
  const avatarColors = [
    "#F44336",
    "#E91E63",
    "#9C27B0",
    "#673AB7",
    "#3F51B5",
    "#2196F3",
    "#03A9F4",
    "#00BCD4",
    "#009688",
    "#4CAF50",
    "#8BC34A",
    "#FF9800",
    "#FF5722"
  ];
  const randomColor = Math.floor(Math.random() * avatarColors.length);
  return avatarColors[randomColor];
};