class Control {
  private state: any;
}

interface SelectableControl extends Control {
  select(): void;
}

class ImageControl implements SelectableControl {
  select() {}
}

class ImageControl2 implements SelectableControl {
  private state: any;
  select() {}
}

class Button extends Control implements SelectableControl {
  select() {}
}

class TextBox extends Control {
  select() {}
}


