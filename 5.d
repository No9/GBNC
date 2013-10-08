#pragma D option quiet
 
node*:::gc-start
{
  printf("GC Start at %d\n",timestamp);
}
 
node*:::gc-done
{
  printf("GC Ended at %d\n", timestamp)
}

pid$1::_ZN7leveldb6DBImpl20BackgroundCompactionEv:entry
{
  printf("Backgound Compaction Start %d\n", timestamp)
}

pid$1::_ZN7leveldb6DBImpl20BackgroundCompactionEv:return
{
   printf("Backgound Compaction Ended %d\n", timestamp)
}

pid$1::_ZN7leveldb6DBImpl16DoCompactionWorkEPNS0_15CompactionStateE:entry
{
  printf("Do Compaction Start %d\n", timestamp)
}

pid$1::_ZN7leveldb6DBImpl16DoCompactionWorkEPNS0_15CompactionStateE:return
{
   printf("Do Compaction Ended %d\n", timestamp)
}

pid$1::_ZN7leveldb6DBImpl26FinishCompactionOutputFileEPNS0_15CompactionStateEPNS_8IteratorE:entry
{
  printf("Finish Compaction Start %d\n", timestamp)
}

pid$1::_ZN7leveldb6DBImpl26FinishCompactionOutputFileEPNS0_15CompactionStateEPNS_8IteratorE:return
{
   printf("Finish Compaction Ended %d\n", timestamp)
}

dtrace:::END
{
  printf("Trace End %d\n", timestamp);
}

tick-600s
{
 exit(0);
}
