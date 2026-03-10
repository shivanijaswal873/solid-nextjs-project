"use client"

import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"
import { visionTool } from "@sanity/vision"

import { apiVersion, dataset, projectId } from "./sanity/env"
import { schema } from "./sanity/schemaTypes"

export default defineConfig({
  name: "default",
  title: "Solid CMS",

  projectId,
  dataset,

  basePath: "/studio",

  plugins: [
    deskTool(), 
    visionTool({ defaultApiVersion: apiVersion }),
  ],

  schema: {
    types: schema.types,
  },
})