
var ApiGen = ApiGen || {};
ApiGen.elements = [["f","afterEach()"],["c","BarBucCommand"],["f","beforeEach()"],["f","context()"],["f","createClosure()"],["f","describe()"],["c","Evenement\\EventEmitter"],["c","Evenement\\EventEmitterInterface"],["c","Evenement\\EventEmitterTrait"],["c","Foo1Command"],["c","Foo2Command"],["c","Foo3Command"],["c","Foo4Command"],["c","Foo5Command"],["c","Foo6Command"],["c","FoobarCommand"],["c","FooCommand"],["c","FooSubnamespaced1Command"],["c","FooSubnamespaced2Command"],["f","it()"],["c","Peridot\\Configuration"],["c","Peridot\\Console\\Application"],["c","Peridot\\Console\\CliOptionParser"],["c","Peridot\\Console\\Command"],["c","Peridot\\Console\\ConfigurationReader"],["c","Peridot\\Console\\Environment"],["c","Peridot\\Console\\InputDefinition"],["c","Peridot\\Console\\Version"],["c","Peridot\\Core\\AbstractTest"],["c","Peridot\\Core\\HasEventEmitterTrait"],["c","Peridot\\Core\\Scope"],["c","Peridot\\Core\\Suite"],["c","Peridot\\Core\\Test"],["c","Peridot\\Core\\TestInterface"],["c","Peridot\\Core\\TestResult"],["c","Peridot\\Reporter\\AbstractBaseReporter"],["c","Peridot\\Reporter\\AnonymousReporter"],["c","Peridot\\Reporter\\ReporterFactory"],["c","Peridot\\Reporter\\ReporterInterface"],["c","Peridot\\Reporter\\SpecReporter"],["c","Peridot\\Runner\\Context"],["c","Peridot\\Runner\\Runner"],["c","Peridot\\Runner\\RunnerInterface"],["c","Peridot\\Runner\\SuiteLoader"],["c","Peridot\\Runner\\SuiteLoaderInterface"],["c","Peridot\\Scope\\Scope"],["c","Peridot\\Scope\\ScopeTrait"],["c","Peridot\\Test\\ItWasRun"],["c","Symfony\\Component\\Console\\Application"],["c","Symfony\\Component\\Console\\Command\\Command"],["c","Symfony\\Component\\Console\\Command\\HelpCommand"],["c","Symfony\\Component\\Console\\Command\\ListCommand"],["c","Symfony\\Component\\Console\\ConsoleEvents"],["c","Symfony\\Component\\Console\\Descriptor\\DescriptorInterface"],["c","Symfony\\Component\\Console\\Event\\ConsoleCommandEvent"],["c","Symfony\\Component\\Console\\Event\\ConsoleEvent"],["c","Symfony\\Component\\Console\\Event\\ConsoleExceptionEvent"],["c","Symfony\\Component\\Console\\Event\\ConsoleTerminateEvent"],["c","Symfony\\Component\\Console\\Exception\\CommandNotFoundException"],["c","Symfony\\Component\\Console\\Exception\\ExceptionInterface"],["c","Symfony\\Component\\Console\\Exception\\InvalidArgumentException"],["c","Symfony\\Component\\Console\\Exception\\InvalidOptionException"],["c","Symfony\\Component\\Console\\Exception\\LogicException"],["c","Symfony\\Component\\Console\\Exception\\RuntimeException"],["c","Symfony\\Component\\Console\\Formatter\\OutputFormatter"],["c","Symfony\\Component\\Console\\Formatter\\OutputFormatterInterface"],["c","Symfony\\Component\\Console\\Formatter\\OutputFormatterStyle"],["c","Symfony\\Component\\Console\\Formatter\\OutputFormatterStyleInterface"],["c","Symfony\\Component\\Console\\Formatter\\OutputFormatterStyleStack"],["c","Symfony\\Component\\Console\\Helper\\DebugFormatterHelper"],["c","Symfony\\Component\\Console\\Helper\\DescriptorHelper"],["c","Symfony\\Component\\Console\\Helper\\DialogHelper"],["c","Symfony\\Component\\Console\\Helper\\FormatterHelper"],["c","Symfony\\Component\\Console\\Helper\\Helper"],["c","Symfony\\Component\\Console\\Helper\\HelperInterface"],["c","Symfony\\Component\\Console\\Helper\\HelperSet"],["c","Symfony\\Component\\Console\\Helper\\InputAwareHelper"],["c","Symfony\\Component\\Console\\Helper\\ProcessHelper"],["c","Symfony\\Component\\Console\\Helper\\ProgressBar"],["c","Symfony\\Component\\Console\\Helper\\ProgressHelper"],["c","Symfony\\Component\\Console\\Helper\\ProgressIndicator"],["c","Symfony\\Component\\Console\\Helper\\QuestionHelper"],["c","Symfony\\Component\\Console\\Helper\\SymfonyQuestionHelper"],["c","Symfony\\Component\\Console\\Helper\\Table"],["c","Symfony\\Component\\Console\\Helper\\TableCell"],["c","Symfony\\Component\\Console\\Helper\\TableHelper"],["c","Symfony\\Component\\Console\\Helper\\TableSeparator"],["c","Symfony\\Component\\Console\\Helper\\TableStyle"],["c","Symfony\\Component\\Console\\Input\\ArgvInput"],["c","Symfony\\Component\\Console\\Input\\ArrayInput"],["c","Symfony\\Component\\Console\\Input\\Input"],["c","Symfony\\Component\\Console\\Input\\InputArgument"],["c","Symfony\\Component\\Console\\Input\\InputAwareInterface"],["c","Symfony\\Component\\Console\\Input\\InputDefinition"],["c","Symfony\\Component\\Console\\Input\\InputInterface"],["c","Symfony\\Component\\Console\\Input\\InputOption"],["c","Symfony\\Component\\Console\\Input\\StringInput"],["c","Symfony\\Component\\Console\\Logger\\ConsoleLogger"],["c","Symfony\\Component\\Console\\Output\\BufferedOutput"],["c","Symfony\\Component\\Console\\Output\\ConsoleOutput"],["c","Symfony\\Component\\Console\\Output\\ConsoleOutputInterface"],["c","Symfony\\Component\\Console\\Output\\NullOutput"],["c","Symfony\\Component\\Console\\Output\\Output"],["c","Symfony\\Component\\Console\\Output\\OutputInterface"],["c","Symfony\\Component\\Console\\Output\\StreamOutput"],["c","Symfony\\Component\\Console\\Question\\ChoiceQuestion"],["c","Symfony\\Component\\Console\\Question\\ConfirmationQuestion"],["c","Symfony\\Component\\Console\\Question\\Question"],["c","Symfony\\Component\\Console\\Shell"],["c","Symfony\\Component\\Console\\Style\\OutputStyle"],["c","Symfony\\Component\\Console\\Style\\StyleInterface"],["c","Symfony\\Component\\Console\\Style\\SymfonyStyle"],["c","Symfony\\Component\\Console\\Tester\\ApplicationTester"],["c","Symfony\\Component\\Console\\Tester\\CommandTester"],["c","Symfony\\Component\\Console\\Tests\\ApplicationTest"],["c","Symfony\\Component\\Console\\Tests\\Command\\CommandTest"],["c","Symfony\\Component\\Console\\Tests\\Command\\HelpCommandTest"],["c","Symfony\\Component\\Console\\Tests\\Command\\ListCommandTest"],["c","Symfony\\Component\\Console\\Tests\\CustomApplication"],["c","Symfony\\Component\\Console\\Tests\\CustomDefaultCommandApplication"],["c","Symfony\\Component\\Console\\Tests\\Descriptor\\AbstractDescriptorTest"],["c","Symfony\\Component\\Console\\Tests\\Descriptor\\JsonDescriptorTest"],["c","Symfony\\Component\\Console\\Tests\\Descriptor\\MarkdownDescriptorTest"],["c","Symfony\\Component\\Console\\Tests\\Descriptor\\ObjectsProvider"],["c","Symfony\\Component\\Console\\Tests\\Descriptor\\TextDescriptorTest"],["c","Symfony\\Component\\Console\\Tests\\Descriptor\\XmlDescriptorTest"],["c","Symfony\\Component\\Console\\Tests\\Fixtures\\DescriptorApplication1"],["c","Symfony\\Component\\Console\\Tests\\Fixtures\\DescriptorApplication2"],["c","Symfony\\Component\\Console\\Tests\\Fixtures\\DescriptorCommand1"],["c","Symfony\\Component\\Console\\Tests\\Fixtures\\DescriptorCommand2"],["c","Symfony\\Component\\Console\\Tests\\Fixtures\\DummyOutput"],["c","Symfony\\Component\\Console\\Tests\\Formatter\\OutputFormatterStyleStackTest"],["c","Symfony\\Component\\Console\\Tests\\Formatter\\OutputFormatterStyleTest"],["c","Symfony\\Component\\Console\\Tests\\Formatter\\OutputFormatterTest"],["c","Symfony\\Component\\Console\\Tests\\Formatter\\TableCell"],["c","Symfony\\Component\\Console\\Tests\\Helper\\FormatterHelperTest"],["c","Symfony\\Component\\Console\\Tests\\Helper\\HelperSetTest"],["c","Symfony\\Component\\Console\\Tests\\Helper\\LegacyDialogHelperTest"],["c","Symfony\\Component\\Console\\Tests\\Helper\\LegacyProgressHelperTest"],["c","Symfony\\Component\\Console\\Tests\\Helper\\LegacyTableHelperTest"],["c","Symfony\\Component\\Console\\Tests\\Helper\\ProcessHelperTest"],["c","Symfony\\Component\\Console\\Tests\\Helper\\ProgressBarTest"],["c","Symfony\\Component\\Console\\Tests\\Helper\\ProgressIndicatorTest"],["c","Symfony\\Component\\Console\\Tests\\Helper\\QuestionHelperTest"],["c","Symfony\\Component\\Console\\Tests\\Helper\\TableStyleTest"],["c","Symfony\\Component\\Console\\Tests\\Helper\\TableTest"],["c","Symfony\\Component\\Console\\Tests\\Input\\ArgvInputTest"],["c","Symfony\\Component\\Console\\Tests\\Input\\ArrayInputTest"],["c","Symfony\\Component\\Console\\Tests\\Input\\InputArgumentTest"],["c","Symfony\\Component\\Console\\Tests\\Input\\InputDefinitionTest"],["c","Symfony\\Component\\Console\\Tests\\Input\\InputOptionTest"],["c","Symfony\\Component\\Console\\Tests\\Input\\InputTest"],["c","Symfony\\Component\\Console\\Tests\\Input\\StringInputTest"],["c","Symfony\\Component\\Console\\Tests\\Logger\\ConsoleLoggerTest"],["c","Symfony\\Component\\Console\\Tests\\Output\\ConsoleOutputTest"],["c","Symfony\\Component\\Console\\Tests\\Output\\NullOutputTest"],["c","Symfony\\Component\\Console\\Tests\\Output\\OutputTest"],["c","Symfony\\Component\\Console\\Tests\\Output\\StreamOutputTest"],["c","Symfony\\Component\\Console\\Tests\\Output\\TestOutput"],["c","Symfony\\Component\\Console\\Tests\\Style\\SymfonyStyleTest"],["c","Symfony\\Component\\Console\\Tests\\Style\\SymfonyStyleWithForcedLineLength"],["c","Symfony\\Component\\Console\\Tests\\Tester\\ApplicationTesterTest"],["c","Symfony\\Component\\Console\\Tests\\Tester\\CommandTesterTest"],["c","TestCommand"],["f","xcontext()"],["f","xdescribe()"],["f","xit()"]];
