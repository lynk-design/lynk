import defaultLibrary from './library.default';
import systemLibrary from './library.system';
import type LynkIcon from '../../components/icon/icon';

export type IconLibraryResolver = (name: string) => string;
export type IconLibraryMutator = (svg: SVGElement) => void;
export interface IconLibrary {
  name: string;
  resolver: IconLibraryResolver;
  mutator?: IconLibraryMutator;
}

let registry: IconLibrary[] = [defaultLibrary, systemLibrary];
let watchedIcons: LynkIcon[] = [];

export function watchIcon(icon: LynkIcon) {
  watchedIcons.push(icon);
}

export function unwatchIcon(icon: LynkIcon) {
  watchedIcons = watchedIcons.filter(el => el !== icon);
}

export function getIconLibrary(name?: string) {
  return registry.find(lib => lib.name === name);
}

export function registerIconLibrary(
  name: string,
  options: { resolver: IconLibraryResolver; mutator?: IconLibraryMutator }
) {
  unregisterIconLibrary(name);
  registry.push({
    name,
    resolver: options.resolver,
    mutator: options.mutator
  });

  // Redraw watched icons
  watchedIcons.forEach(icon => {
    if (icon.library === name) {
      icon.redraw();
    }
  });
}

export function unregisterIconLibrary(name: string) {
  registry = registry.filter(lib => lib.name !== name);
}
