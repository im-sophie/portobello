export interface UIStateInterface {
  currentTabName: string;
}

function state(): UIStateInterface {
  return {
    currentTabName: 'profile'
  };
}

export default state;
