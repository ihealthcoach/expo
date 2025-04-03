/// <reference types="expo-router/types" />

declare module "expo-router/build/Route" {
  interface RouteConfig {
    "/(workout)/exercise-tracking/[id]": {
      id: string;
    };
  }
} 