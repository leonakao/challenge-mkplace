/* eslint-disable no-console */
import Database from 'src/main/database';
import mongoose from 'mongoose';

export default class MongoDatabaseAdapter implements Database {
  private readonly uri: string;

  constructor(uri: string) {
    this.uri = uri;

    mongoose.connection.on('connected', () => {
      console.log('Mongoose connection is open');
    });

    mongoose.connection.on('disconnect', this.connect);
  }

  async connect(): Promise<void> {
    await mongoose.connect(this.uri, {
      autoIndex: true,
    });

    console.log('Connected to database');
  }
}
