import Map "mo:core/Map";
import Int "mo:core/Int";
import Text "mo:core/Text";
import Order "mo:core/Order";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";

actor {
  type Submission = {
    name : Text;
    email : Text;
    message : Text;
    timestamp : Int;
  };

  module Submission {
    public func compareByTimestamp(a : Submission, b : Submission) : Order.Order {
      Int.compare(a.timestamp, b.timestamp);
    };
  };

  let submissions = Map.empty<Int, Submission>();

  public shared ({ caller }) func submit(name : Text, email : Text, message : Text, timestamp : Int) : async () {
    if (name.isEmpty()) { Runtime.trap("Name cannot be empty") };
    if (email.isEmpty()) { Runtime.trap("Email cannot be empty") };
    if (message.isEmpty()) { Runtime.trap("Message cannot be empty") };

    let submission : Submission = {
      name;
      email;
      message;
      timestamp;
    };

    submissions.add(timestamp, submission);
  };

  public query ({ caller }) func getAllSubmissions() : async [Submission] {
    submissions.values().toArray().sort(Submission.compareByTimestamp);
  };
};
