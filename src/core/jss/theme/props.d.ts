import { AppBarProps } from "../AppBar";
import { AvatarProps } from "../Avatar";
import { BackdropProps } from "../Backdrop";
import { BadgeProps } from "../Badge";
import { BottomNavigationActionProps } from "../BottomNavigationAction";
import { BottomNavigationProps } from "../BottomNavigation";
import { BreadcrumbsProps } from "../Breadcrumbs";
import { ButtonBaseProps } from "../ButtonBase";
import { ButtonGroupProps } from "../ButtonGroup";
import { ButtonProps } from "../Button";
import { CardActionAreaProps } from "../CardActionArea";
import { CardActionsProps } from "../CardActions";
import { CardContentProps } from "../CardContent";
import { CardHeaderProps } from "../CardHeader";
import { CardMediaProps } from "../CardMedia";
import { CardProps } from "../Card";
import { CheckboxProps } from "../Checkbox";
import { ChipProps } from "../Chip";
import { CircularProgressProps } from "../CircularProgress";
import { CollapseProps } from "../Collapse";
import { ContainerProps } from "../Container";
import { CssBaselineProps } from "../CssBaseline";
import { DialogActionsProps } from "../DialogActions";
import { DialogContentProps } from "../DialogContent";
import { DialogContentTextProps } from "../DialogContentText";
import { DialogProps } from "../Dialog";
import { DialogTitleProps } from "../DialogTitle";
import { DividerProps } from "../Divider";
import { DrawerProps } from "../Drawer";
import { ExpansionPanelActionsProps } from "../ExpansionPanelActions";
import { ExpansionPanelDetailsProps } from "../ExpansionPanelDetails";
import { ExpansionPanelProps } from "../ExpansionPanel";
import { ExpansionPanelSummaryProps } from "../ExpansionPanelSummary";
import { FabProps } from "../Fab";
import { FilledInputProps } from "../FilledInput";
import { FormControlLabelProps } from "../FormControlLabel";
import { FormControlProps } from "../FormControl";
import { FormGroupProps } from "../FormGroup";
import { FormHelperTextProps } from "../FormHelperText";
import { FormLabelProps } from "../FormLabel";
import { GridListProps } from "../GridList";
import { GridListTileBarProps } from "../GridListTileBar";
import { GridListTileProps } from "../GridListTile";
import { GridProps } from "../Grid";
import { IconButtonProps } from "../IconButton";
import { IconProps } from "../Icon";
import { InputAdornmentProps } from "../InputAdornment";
import { InputBaseProps } from "../InputBase";
import { InputLabelProps } from "../InputLabel";
import { InputProps } from "../Input";
import { LinearProgressProps } from "../LinearProgress";
import { LinkProps } from "../Link";
import { ListItemAvatarProps } from "../ListItemAvatar";
import { ListItemIconProps } from "../ListItemIcon";
import { ListItemProps } from "../ListItem";
import { ListItemSecondaryActionProps } from "../ListItemSecondaryAction";
import { ListItemTextProps } from "../ListItemText";
import { ListProps } from "../List";
import { ListSubheaderProps } from "../ListSubheader";
import { MenuItemProps } from "../MenuItem";
import { MenuListProps } from "../MenuList";
import { MenuProps } from "../Menu";
import { MobileStepperProps } from "../MobileStepper";
import { ModalProps } from "../Modal";
import { NativeSelectProps } from "../NativeSelect";
// import { Options as useMediaQueryOptions } from "../useMediaQuery";
import { OutlinedInputProps } from "../OutlinedInput";
import { PaperProps } from "../Paper";
import { PopoverProps } from "../Popover";
import { RadioGroupProps } from "../RadioGroup";
import { RadioProps } from "../Radio";
import { SelectProps } from "../Select";
import { SliderProps } from "../Slider";
import { SnackbarContentProps } from "../SnackbarContent";
import { SnackbarProps } from "../Snackbar";
import { StepButtonProps } from "../StepButton";
import { StepConnectorProps } from "../StepConnector";
import { StepContentProps } from "../StepContent";
import { StepIconProps } from "../StepIcon";
import { StepLabelProps } from "../StepLabel";
import { StepperProps } from "../Stepper";
import { StepProps } from "../Step";
import { SvgIconProps } from "../SvgIcon";
import { SwipeableDrawerProps } from "../SwipeableDrawer";
import { SwitchProps } from "../Switch";
import { TableBodyProps } from "../TableBody";
import { TableCellProps } from "../TableCell";
import { TableContainerProps } from "../TableContainer";
import { TableHeadProps } from "../TableHead";
import { TablePaginationProps } from "../TablePagination";
import { TableProps } from "../Table";
import { TableRowProps } from "../TableRow";
import { TableSortLabelProps } from "../TableSortLabel";
import { TabProps } from "../Tab";
import { TabsProps } from "../Tabs";
import { TextFieldProps } from "../TextField";
import { ToolbarProps } from "../Toolbar";
import { TooltipProps } from "../Tooltip";
import { TouchRippleProps } from "../ButtonBase/TouchRipple";
import { TypographyProps } from "../Typography";
import { WithWidthOptions } from "../withWidth";

export type ComponentsProps = {
  [Name in keyof ComponentsPropsList]?: Partial<ComponentsPropsList[Name]>;
};

export interface ComponentsPropsList {
  SquiAppBar: AppBarProps;
  SquiAvatar: AvatarProps;
  SquiBackdrop: BackdropProps;
  SquiBadge: BadgeProps;
  SquiBottomNavigation: BottomNavigationProps;
  SquiBottomNavigationAction: BottomNavigationActionProps;
  SquiBreadcrumbs: BreadcrumbsProps;
  SquiButton: ButtonProps;
  SquiButtonBase: ButtonBaseProps;
  SquiButtonGroup: ButtonGroupProps;
  SquiCard: CardProps;
  SquiCardActionArea: CardActionAreaProps;
  SquiCardActions: CardActionsProps;
  SquiCardContent: CardContentProps;
  SquiCardHeader: CardHeaderProps;
  SquiCardMedia: CardMediaProps;
  SquiCheckbox: CheckboxProps;
  SquiChip: ChipProps;
  SquiCircularProgress: CircularProgressProps;
  SquiCollapse: CollapseProps;
  SquiContainer: ContainerProps;
  SquiCssBaseline: CssBaselineProps;
  SquiDialog: DialogProps;
  SquiDialogActions: DialogActionsProps;
  SquiDialogContent: DialogContentProps;
  SquiDialogContentText: DialogContentTextProps;
  SquiDialogTitle: DialogTitleProps;
  SquiDivider: DividerProps;
  SquiDrawer: DrawerProps;
  SquiExpansionPanel: ExpansionPanelProps;
  SquiExpansionPanelActions: ExpansionPanelActionsProps;
  SquiExpansionPanelDetails: ExpansionPanelDetailsProps;
  SquiExpansionPanelSummary: ExpansionPanelSummaryProps;
  SquiFab: FabProps;
  SquiFilledInput: FilledInputProps;
  SquiFormControl: FormControlProps;
  SquiFormControlLabel: FormControlLabelProps;
  SquiFormGroup: FormGroupProps;
  SquiFormHelperText: FormHelperTextProps;
  SquiFormLabel: FormLabelProps;
  SquiGrid: GridProps;
  SquiGridList: GridListProps;
  SquiGridListTile: GridListTileProps;
  SquiGridListTileBar: GridListTileBarProps;
  SquiIcon: IconProps;
  SquiIconButton: IconButtonProps;
  SquiInput: InputProps;
  SquiInputAdornment: InputAdornmentProps;
  SquiInputBase: InputBaseProps;
  SquiInputLabel: InputLabelProps;
  SquiLinearProgress: LinearProgressProps;
  SquiLink: LinkProps;
  SquiList: ListProps;
  SquiListItem: ListItemProps;
  SquiListItemAvatar: ListItemAvatarProps;
  SquiListItemIcon: ListItemIconProps;
  SquiListItemSecondaryAction: ListItemSecondaryActionProps;
  SquiListItemText: ListItemTextProps;
  SquiListSubheader: ListSubheaderProps;
  SquiMenu: MenuProps;
  SquiMenuItem: MenuItemProps;
  SquiMenuList: MenuListProps;
  SquiMobileStepper: MobileStepperProps;
  SquiModal: ModalProps;
  SquiNativeSelect: NativeSelectProps;
  SquiOutlinedInput: OutlinedInputProps;
  SquiPaper: PaperProps;
  SquiPopover: PopoverProps;
  SquiRadio: RadioProps;
  SquiRadioGroup: RadioGroupProps;
  SquiSelect: SelectProps;
  SquiSlider: SliderProps;
  SquiSnackbar: SnackbarProps;
  SquiSnackbarContent: SnackbarContentProps;
  SquiStep: StepProps;
  SquiStepButton: StepButtonProps;
  SquiStepConnector: StepConnectorProps;
  SquiStepContent: StepContentProps;
  SquiStepIcon: StepIconProps;
  SquiStepLabel: StepLabelProps;
  SquiStepper: StepperProps;
  SquiSvgIcon: SvgIconProps;
  SquiSwipeableDrawer: SwipeableDrawerProps;
  SquiSwitch: SwitchProps;
  SquiTab: TabProps;
  SquiTable: TableProps;
  SquiTableBody: TableBodyProps;
  SquiTableCell: TableCellProps;
  SquiTableContainer: TableContainerProps;
  SquiTableHead: TableHeadProps;
  SquiTablePagination: TablePaginationProps;
  SquiTableRow: TableRowProps;
  SquiTableSortLabel: TableSortLabelProps;
  SquiTabs: TabsProps;
  SquiTextField: TextFieldProps;
  SquiToolbar: ToolbarProps;
  SquiTooltip: TooltipProps;
  SquiTouchRipple: TouchRippleProps;
  SquiTypography: TypographyProps;
  // SquiUseMediaQuery: useMediaQueryOptions;
  SquiWithWidth: WithWidthOptions;
}
