export interface LinkBox {
  title: string
  description: string
}

export interface Service extends LinkBox {
  src: string
}

export type UseGoToTop = [boolean, () => void]
