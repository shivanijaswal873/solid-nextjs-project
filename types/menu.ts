export type Menu = {
  id: number
  title: string
  path?: string
  newTab?: boolean

  submenu?: {
    id: number
    title: string
    path?: string
    newTab?: boolean
  }[]

  logoLight?: {
    asset?: {
      url: string
    }
  }

  logoDark?: {
    asset?: {
      url: string
    }
  }

  githubLink?: string
  buttonText?: string
  buttonLink?: string
}