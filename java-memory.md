## Java memory model

Refs:
https://javapapers.com/java/java-garbage-collection-introduction/
https://stackify.com/what-is-java-garbage-collection/

### Memory areas
- Young gen (Eden + Survivor[s0, s1]) - Minor GC
- Old gen (tenured) - Major GC
- Perm gen
Full GC runs on all memory areas


### Garbage collectors
- Serial - One thread
- Parallel - Multiple threads for minor GC & one thread for major GC
- CMS(Concurrent mark sweep) - Multiple threads on minor and major GC areas, runs alongside application
- G1(Garbage first) - Replacement for CMS, works differetly under the hood

