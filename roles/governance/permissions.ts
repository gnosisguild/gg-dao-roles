import { allow } from "zodiac-roles-sdk/kit";

const snapshotVoteConstraints = {
  from: "0x12BEEF35025841EFccb77D6EE40df86400Fdb4bB",
  space: "gnosis.eth",
};
const snapshotDomainConstraints = {
  name: "snapshot",
};

export default [
  allow.eth.snapshotSigner.signSnapshotVote(
    snapshotVoteConstraints,
    snapshotDomainConstraints,
    { delegatecall: true },
  ),
  allow.eth.snapshotSigner.signSnapshotArrayVote(
    snapshotVoteConstraints,
    snapshotDomainConstraints,
    { delegatecall: true },
  ),
  allow.eth.snapshotSigner.signSnapshotStringVote(
    snapshotVoteConstraints,
    snapshotDomainConstraints,
    { delegatecall: true },
  ),
] satisfies Permissions;
