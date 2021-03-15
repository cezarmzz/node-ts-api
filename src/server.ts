import { Server } from "@overnightjs/core";
import { ForecastController } from "@src/controllers/forecast";
import express, { Application } from "express";
import "./util/module-alias";

export class SetupServer extends Server {
  constructor(private port = 3000) {
    super();
  }
  public init(): void {
    this.setupExpress();
    this.setupControllers();
  }

  private setupExpress(): void {
    this.app.use(express.json());
  }

  private setupControllers(): void {
    const forecastController = new ForecastController();
    this.addControllers([forecastController]);
  }

  public getApp(): Application {
    return this.app;
  }
}
