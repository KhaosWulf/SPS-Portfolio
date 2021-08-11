package com.google.sps.data;

/** An item on a todo list. */
public final class Task {

  private final long id;
  private final String recommendation;
  private final long timestamp;

  public Task(long id, String recommendation, long timestamp) {
    this.id = id;
    this.recommendation = recommendation;
    this.timestamp = timestamp;
  }
}